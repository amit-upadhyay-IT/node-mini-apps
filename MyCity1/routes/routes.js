
function homeR(req, res){// this is mapping the home page
    res.render('home.ejs', {title:"I Love my city",
                            headline:"Every city has its own personality"}); // the template file will have data to be changed and the changing data has to be captured
    // in javascript variables and the values for the changing data will be provided within the {}.

    // the express library will automatically be able to find a file whose name is home.ejs and after that that file will be
    // shown over here.

    // we have only two variables inside our home.ejs file and those are title and headline and these have to be specified in
    // these {}
}



function cityR(req, res){

    // for city we want to use single template file and have data for 4-5 cities over there. So that's why we except the user to enter something like hostname/london, hostname/newyork
    // etc. So the / and positional parameter are mentioned in 'city' variable.
    // So we have to populate the values of title and headline appropriately.

    var cityname = req.params.city;

    var titleValue;
    var headlineValue;
    // based on city I'll modify the titleValue and headlineValue

    if (cityname === 'newyork')
    {
        titleValue = "New York";
        headlineValue = "Business capital of the world";
    }
    else if (cityname == 'london')
    {
	    titleValue = "London";
        headlineValue = "City of Thames";
    }
    else if (cityname == 'newdelhi')
    {
	    titleValue = "New Delhi";
        headlineValue = "Place where I live";
    }
    else if (cityname == 'paris')
    {
	    titleValue = "Paris";
        headlineValue = "Place where I never visited";
    }

    res.render('city.ejs', {title:titleValue,
    headline:headlineValue});
}

module.exports.cityFn = cityR;
module.exports.homeFn = homeR;
