var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var livereload = require('livereload');
var connectLiveReload = require('connect-livereload')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const publicDirectory =  path.join(__dirname, '/public');

var liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

var app = express();

app.use(connectLiveReload());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicDirectory));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// error handler 
app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
 
  if (error.statusCode === 404) {
    console.log(`${req.ip} tried to access ${req.originalUrl}`)
    return res.status(404).redirect('error.html');
    
  }
  return res
    .status(error.statusCode)
    .json({ error: error.toString() });
})

module.exports = app;
