var express = require('express')
  , path = require('path')
 // , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , expressSession = require('express-session')
  , FSStore = require('connect-fs')(expressSession)
  , app = express()
  , sessionDir = path.join(require('os').tmpdir(), 'sessions')
  , options = { dir : path.join(require('os').tmpdir(), 'sessions') }
;

  if (!path.existsSync(sessionDir)){
    require('fs').mkdirSync(sessionDir);
  }

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '../client/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(/*'X-HTTP-Method-Override'*/));
app.use(cookieParser());
app.use(expressSession({secret: 'secret', store : new FSStore(options), cookie: { httpOnly: false, maxAge: 7 * 24 * 60 * 60 * 1000 }}));
app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/', require('./routes/index'));
app.use('/lk', require('./routes/lk'));

app.use(function(req, res, next) { res.status(404).send('Page not found'); });
app.use(function(err, req, res, next) { res.status(error.status || 500).send('Server error' + ' ' + err.message); });

module.exports = app;
