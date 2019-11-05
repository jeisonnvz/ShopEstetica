var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var MongoStore = require('connect-mongo')(session);
//  n 

var indexRouter = require('./routes/index');
var userRoutes= require('./routes/user');

var app = express();

mongoose.connect('mongodb://localhost:27017/shopping');

// mercadopago.configure({
//   access_token: 'PROD_ACCESS_TOKEN'
// });

require('./config/passport');

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie:{ maxAge:180 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());  
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
res.locals.login = req.isAuthenticated();
res.locals.session = req.session;
next();
});

app.use('/user', userRoutes);
app.use('/', indexRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

