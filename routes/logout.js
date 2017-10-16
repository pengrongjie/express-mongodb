var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logout', function(req, res, next) {
  if(req.session.user){
    delete req.session.user;
    res.redirect('/')
  }
});

module.exports = router;
