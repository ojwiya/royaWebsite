
//http://expressjs.com/api#router
//http://bulkan-evcimen.com/using_express_router_instead_of_express_namespace.htm
var express = require('express');
var app = express();
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// this will only be invoked if the path ends in /bar
router.use('/img', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  res.send('public/img');
  //next();
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

