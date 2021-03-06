var express = require('express')
    ,path = require('path')
    ,favicon = require('serve-favicon')
    ,logger = require('morgan')
    ,cookieParser = require('cookie-parser')
    ,bodyParser = require('body-parser')
    ,http = require('http')
    ,$ = require('jquery')
    ,engine = require('ejs-locals')
    ,nib = require('nib');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs', engine);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/css', express.static(path.join(__dirname, 'dist/css')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
// 启动及端口
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
