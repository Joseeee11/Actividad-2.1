var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var equipoRouter = require('./routes/equipo');
// var solicitanteRouter = require('./routes/solicitante');
// var personalRouter = require('./routes/personal');
var espaciosRouter = require('./routes/espacios');
// var reserva_espaciosRouter = require('./routes/reserva_espacios');
// var reserva_equiposRouter = require('./routes/reserva_equipos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/equipo', equipoRouter);
// app.use('/solicitante', solicitanteRouter);
// app.use('/personal', personalRouter);
app.use('/espacios', espaciosRouter);
// app.use('/reserva_espacios', reserva_espaciosRouter);
// app.use('/reserva_equipos', reserva_equiposRouter);


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
