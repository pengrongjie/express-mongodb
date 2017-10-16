var express = require('express');
var router = express.Router();
var Model = require('../data/module');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next){
  var Name = req.body.Name;
  var Password = req.body.Password;

  Model.User.findOne({username: Name}, function(err, doc){
    if(err){
      console.log(err);
      return;
    }
    if(!doc){
      res.send('用户名不存在');
      return;
    }
    if(doc.password == Password){
      console.log('登录成功');
      req.session.user = {username: Name};
      res.redirect('/');
      return;
    }
    res.send('用户名或者密码错误');
    return;
  })
})

module.exports = router;
