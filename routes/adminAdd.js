var express = require('express');
var router = express.Router();
var Model = require('../data/module');
// var Article = require('../data/module');

/* GET users listing. */
router.get('/adminAdd', function(req, res, next) {
  var user = req.session.user;
  if(user && user.username){
    res.render('adminAdd', {title: 'Express',user: user});
    return;
  }else{
    res.redirect('/login');
    return;
  }
});

router.post('/adminAdd', function(req, res, next){
  var Title = req.body.Title;
  var Content = req.body.Content;
  var Author = req.body.Author;
  var date = new Date(),
      yy = date.getFullYear(),
      MM = date.getMonth() + 1,
      dd = date.getDate(),
      hh = date.getHours(),
      mm = date.getMinutes(),
      ss = date.getSeconds();

  var newArticle = new Model.Article({
    title: Title,
    content: Content,
    author: Author,
    date: yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss
  });

  newArticle.save(function(err){
    if(err){
      console.log(err);
      return;
    }else{
      console.log('添加成功');
      res.redirect('/admin');
    }
  })
})

module.exports = router;
