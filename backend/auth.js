import { Router } from 'express';
import pkg from 'bcryptjs';
const { compare } = pkg;
import pkg1 from 'jsonwebtoken';
const { sign, verify } = pkg1; // ✅ Added `verify` import
import { body, validationResult } from 'express-validator';
import User from './model.js'; // Import the User model

const router = Router();
const JWT_SECRET = "220495"; // ✅ Use environment variable

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
      const decoded = verify(token, JWT_SECRET);
      req.user = decoded.user;
      next();
  } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
  }
};

// User Login Route
router.post(
  '/',
  [
    body('useremail').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { useremail, password } = req.body;

    try {
      let user = await User.findOne({ useremail });
      if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] }); // ✅ 401 for Unauthorized
      }

      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const payload = { user: { id: user.id } };
      const token = sign(payload, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);


// Get Logged-in User
router.get('/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // ✅ Get token safely

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    const user = await User.findById(decoded.user.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ msg: 'Invalid token' }); // ✅ 403 for Forbidden
  }
});

router.post("/update-travel-list", authMiddleware, async (req, res) => {
  try {
      const { travelList } = req.body;
      const user = await User.findByIdAndUpdate(
          req.user.id,
          { travelList },
          { new: true }
      );

      if (!user) return res.status(404).json({ message: "User not found" });

      res.json({ message: "Travel list updated", travelList: user.travelList });
  } catch (error) {
      res.status(500).json({ message: "Error updating travel list" });
  }
});


export default router;
