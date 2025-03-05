import { Router } from 'express';
import pkg from 'bcryptjs';
const { hash } = pkg;
import { body, validationResult } from 'express-validator';
import User from './model.js'; // Import User model

const router = Router();

// User Signup Route
router.post('/', [
    body('fullname').notEmpty().withMessage("Please enter your full name"),
    body('useremail').isEmail().withMessage("Please enter your email address"),
    body('password').isLength({ min: 6 })
], async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, useremail, password } = req.body;

    try {
        // ✅ Fix: Use User.findOne() instead of findOne()
        let user = await User.findOne({ useremail });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Hash the password before saving
        const hashedPassword = await hash(password, 10);

        // Create new user
        user = new User({
            fullname,
            useremail,
            password: hashedPassword
        });

        // Save user to the database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router;
