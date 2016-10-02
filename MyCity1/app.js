var exp = require("express");

var app = exp();

var port = process.env.PORT || 4000; // We are basically doint this for heroku deployment:heroku keeps your port number at a specific location and if you don't specify and if you don't specify and port number then it uses a default port number.

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});
