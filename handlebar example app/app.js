var express = require('express');
var handlebars = require('express-handlebars');
var bodyparser = require('body-parser');
var session = require('express-session'); 
var net = require('net');

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({secret: "secret",  resave : true,  saveUninitialized : false}));

var routes = require('./routes/routes.js');

app.set('view engine', 'handlebars'); // with handlebars you need to write one more line that you need not write while using ejs
app.engine('handlebars', handlebars({defaultLayout:'layout'}));
// this being a new template engine it requires the time of setting up the view engine as handlebars
// we also specify how handlebars should be initialized. So when the first instance of handlebars is to be created then there will be only
// one instance so when the instance is going to be created for this application at that time do you want to initialize it with something or not
// so basically there is a concept of layout page, our application is using a layout and this is specified in the {}. Within {}
// you can specify a layout page name. You can keep it empty if you don't want to specify any layout.

app.get('/', routes.loginPageHandler);
app.get('/logout', routes.logoutHandler);
app.get('/toLanding', routes.landingPageHandler);
app.post('/toCity', routes.cityPageHandler);

app.use("*", function(req, res) {
     res.status(404);
     res.render('404.handlebars', {});
});

app.use(function(error, req, res, next) {
     console.log('Error : 500::' + error);
     res.status(500);
     res.render('500.handlebars', {err:error});  // good for knowledge but don't do it in real applications
});


var port = process.env.PORT || 3000;

console.log("Checking the availability of port %d", port);
var netServer = net.createServer();
netServer.once('error', function(err) {
  if (err.code === 'EADDRINUSE') {
    console.log("port %d is currently in use", port);
  }
});


netServer.listen(port, function(){
	console.log('Net server is able to listen on port: ' + port);
	netServer.close();
	console.log('Closing Net server on port: ' + port);

	app.listen(port, function(){
		console.log('port %d is available. Hence starting the HTTP server on it.', port);
	});
});
