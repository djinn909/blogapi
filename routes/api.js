const express = require('express');
const passport = require('passport');

const router = express.Router(); 

const user_controller = require('../controllers/userController'); 

// POST user signup - api/signup
router.post('/signup', user_controller.signup);

router.post('/login' , user_controller.login);
module.exports = router;