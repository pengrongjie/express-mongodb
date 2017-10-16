var express = require('express');
var router = express.Router();
var Model = require('../data/module');

/* GET users listing. */
router.get('/adminDel', function(req, res, next) {
    var user = req.session.user;
    var _id = req.query._id;
    Model.Article.remove({_id: _id}, function(err){
      if(err){
        console.log(err);
        return;
      }else{
        console.log('删除成功');
        res.redirect('/admin');
      }
    })
});

module.exports = router;
