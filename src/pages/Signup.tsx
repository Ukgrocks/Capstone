import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    useremail: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData, {
          headers: { 'Content-Type': 'application/json' }
      });
      
      console.log('Response:', response.data);
      alert('User registered successfully');
      navigate('/login');
  } catch (error: any) {
    if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server Error:', error.response.data);
        alert(error.response.data.errors?.[0]?.msg || 'Registration failed');
    } else if (error.request) {
        // No response was received from the server
        console.error('No response received:', error.request);
        alert('Server did not respond. Please try again later.');
    } else {
        // Other errors (e.g., network issues)
        console.error('Error:', error.message);
        alert('An unexpected error occurred. Please try again.');
    }
}
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-orange-700" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-orange-700 hover:text-orange-600">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
  <div className="space-y-4">
    <div>
      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        id="fullname"
        name="fullname" // ✅ Corrected
        type="text"
        required
        value={formData.fullname}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
    <div>
      <label htmlFor="useremail" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <input
        id="useremail"
        name="useremail" // ✅ Corrected
        type="email"
        required
        value={formData.useremail}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        id="password"
        name="password" // ✅ Corrected
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
    <div>
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword" // ✅ Corrected
        type="password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  </div>

  <button
    type="submit"
    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
  >
    Create Account
  </button>
</form>

      </div>
    </div>
  );
};

export default Signup;