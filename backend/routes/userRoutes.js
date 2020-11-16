const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {
  authUser,
  getUserProfile,
  updateUserProfile,
  registerUser} = require('../controllers/userController');

router.route('/').post(registerUser);
router.post('/login', authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

module.exports = router;
