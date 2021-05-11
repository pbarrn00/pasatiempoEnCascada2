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
console.log(__dirname)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicDirectory));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// error handler 
app.use((req, res, next) => {
  res.status(404).sendFile('error.html', {root: publicDirectory});
  console.log(`${req.ip} tried to access ${req.originalUrl}`)
});

module.exports = app;
