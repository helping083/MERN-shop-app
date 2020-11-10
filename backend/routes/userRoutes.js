const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {authUser, getUserProfile} = require('../controllers/userController');

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
