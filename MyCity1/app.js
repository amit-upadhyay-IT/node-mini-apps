var exp = require("express");

var app = exp();

app.get('/players', function(req, res){// whenever the request players comes then the callback method gets executed
    // in this callback method we are going to retrive whatever has been sent in request prarmeters
    var query = req.query; // so in http protocol whatever is sent as url parameters those can be retrived by this line of code

    console.log("Query value : "+ JSON.stringify(query));
    res.write("Name = "+query.name);
    res.end("\nAge = "+query.age);
    res.end(JSON.stringify(query));
});
var port = process.env.PORT || 4000; // We are basically doint this for heroku deployment:heroku keeps your port number at a specific location and if you don't specify and if you don't specify and port number then it uses a default port number.

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});
