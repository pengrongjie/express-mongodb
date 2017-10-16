var express = require('express');
var router = express.Router();
var Model = require('../data/module');

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next){
  var Name = req.body.Name;
  var Password = req.body.Password;
  var Password2 = req.body.Password2;
  var userData = {
    username: Name,
    password: Password
  }

  if(!Name || !Password){
    res.sned('用户名或者密码不能为空');
    return;
  }
  if(Password !== Password2){
    res.send('两次密码不一样');
    return;
  }

  Model.User.findOne({username: Name}, function(err, doc){
    if(err){
      console.log(err);
      return;
    }else if(doc){
      res.send('用户名已经存在');
      return;
    }else{
      Model.User.create(userData, function(err, doc){
        if(err){
          console.log(err);
          return;
        }else{
          console.log('创建用户成功');
          console.log(doc);
          req.session.user = {username: Name};
          res.redirect('/login');
        }
      })
    }
  })
});

module.exports = router;
