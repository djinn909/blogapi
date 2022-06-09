const express = require('express');
const router = express.Router(); 
const passport = require('passport'); 

/* GET home page. */
// return all posts
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
}); 

router.post('/ss', function(req, res, next) {
  res.send('respond with a resource');
}); 

const user_controller = require('../controllers/userController');  
const post_controller = require('../controllers/postController'); 
const msg_controller = require('../controllers/commentController');

// POST user signup - api/signup
router.post('/signup', user_controller.signup); 

router.post('/login' , user_controller.login); 

router.get('/logout', user_controller.logout); 

router.post('/posts', passport.authenticate("jwt", { session: false }), post_controller.create_post); 

router.post('/comments', passport.authenticate("jwt", { session: false }), msg_controller.create_comment); 

router.get('/posts', post_controller.list_post);

module.exports = router;