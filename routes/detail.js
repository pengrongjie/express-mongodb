var express = require('express');
var router = express.Router();
var Model = require('../data/module');

router.get('/detail', function(req, res, next){
  var user = req.session.user;
  var _id = req.query._id;
  Model.Article.findOne({_id: _id}, function(err,doc){
    if(err){
      console.log(err);
      return;
    }else{
      doc.views++;
      doc.save();
      res.render('detail', {title: 'Express',user: user,item: doc})
    }
  })
})

module.exports = router;
