const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utills/generateToken');

// @desc    Auth user and get token
// @route   Post /api/users/login
// @access  Public
exports.authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});
