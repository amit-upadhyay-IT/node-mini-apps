var exp = require("express");
var app = exp();

app.set('view engine', 'ejs');

app.get('/', function(req, res){// this is mapping the home page
    res.render('home.ejs', {}); // the template file will have data to be changed and the changing data has to be captured
    // in javascript variables and the values for the changing data will be provided within the {}.
});

app.get('/:city', function(req, res){// the : specifies the positional parameter of referring to the request parameter
    // so whenever you go this web site and say /some_city then at that time that some_city page has to be shown
    // so that's why we are going to create a second template file which we are calling as 'city.ejs'.

    // so this application is going to have two different template file, one for the home page and other for every city

    res.render('city.ejs', {});
});

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});
