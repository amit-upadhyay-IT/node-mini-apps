var exp = require("express");
var app = exp();

app.set('view engine', 'ejs');

var handlers = require('./routes/routes.js');

app.get('/', handlers.homeFn);



app.get('/:city', handlers.cityFn);

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});
