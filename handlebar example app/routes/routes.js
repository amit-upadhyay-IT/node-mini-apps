
exports.loginPageHandler = function(req, res){
	res.render('login.handlebars', {});
}//loginPageHandler

exports.logoutHandler = function(req, res){
	req.session.destroy();
	res.render('login.handlebars', {LOGGEDIN:false});
}//logoutHandler

exports.landingPageHandler = function(req, res){

    // it is the handler for the page which comes after user logs in
    // if by that time if the user has provided a name (that name will be present in session)
    // then we are loading that name into the variable person from session, if not then
    // that name is coming via login page in the request query parameter and the input text
    // whatever is being provided in the login page the nave attribute of that input text
    // will be nm. So the query parameter of request which is going to be get request so login request
    // if you remember is a get request. So whatever the parameter nm will have then that will be
    // coming to you as req.query.nm and that value we are populating in person variable
	// user comes to this handler after login, set loggedin variable in session to true.
	req.session.loggedin = true;

	var person;
	if (req.session.userName){   //session store has userName
		console.log("User Name already in session. It is " + req.session.userName);
		person = req.session.userName;
	}else{ //session store does NOT have userName
		// read username from req.query and keep into the session store
		person = req.query.nm;
		req.session.userName = person;
		console.log("User Name does not exist in session. Hence storing it in session store " + person);
	}

	res.render('landingpage.handlebars', {welcomeMessage:person, 
										LOGGEDIN:req.session.loggedin});
}//landingPageHandler

exports.cityPageHandler = function(req, res){
	var interestValue = req.body.interest;
	var cityNameValue, taglineValue;
	console.log("received interestValue  as " + interestValue);
	var imageArray = [];

	if (interestValue === 'history'){
		cityNameValue = 'Rome';
		taglineValue = 'The city of earliest civilization';
		imageArray = [1,2];
	}else if (interestValue === 'fashion'){
		cityNameValue = 'Paris';
		taglineValue = 'The fashion capital of the world';
		imageArray = [1,2,3];
	}else if (interestValue === 'finance'){
		cityNameValue = 'New York';
		taglineValue = 'The business capital of the world';
		imageArray = [1,2,3,4,5,6];
	}
	
	res.render('city.handlebars', {cityName:cityNameValue, 
						tagline: taglineValue, 
						welcomeMessage:req.session.userName,
						imageArray:imageArray,
						LOGGEDIN:req.session.loggedin});

}//cityPageHandler
