var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test70');
var articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  date: String,
  views: {type: Number, default: 0}
});

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// var Article = mongoose.model('Article', articleSchema);
// module.exports = Article;

var Model = {
  Article: mongoose.model('Article', articleSchema),
  User: mongoose.model('User', userSchema)
};

module.exports = Model;
