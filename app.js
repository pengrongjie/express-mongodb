var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 引入session
var session = require('express-session');

var index = require('./routes/index');
var detail = require('./routes/detail');
var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');

var test1 = require('./routes/test1');

var admin = require('./routes/admin');
var adminAdd = require('./routes/adminAdd');
var adminUpdate = require('./routes/adminUpdate');
var adminDel = require('./routes/adminDel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 设置session
app.use(session({
  secret: 'hello,jie',
  cookie: {
    maxAge: 15*60*1000,
    secure: false
  },
  resave: false,
  saveUninitialized: false
}));

app.use('/', index);
app.use('/', detail);
app.use('/', login);
app.use('/', logout);
app.use('/', register);

app.use('/', test1);

app.use('/admin', admin);
app.use('/admin', adminAdd);
app.use('/admin', adminDel);
app.use('/admin', adminUpdate);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
