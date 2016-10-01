In the HTML file I've an array of quotes and I select a random quote using :

    var randomNumber=Math.floor((Math.random() * 20) + 1);
    document.getElementById('quote').innerHTML=quoteArray[randomNumber-1];
Then I'm creating a webserver using express :

    var express=require('express');
    var app=express();

    app.get('/',function(request,response){
      response.sendFile(__dirname+'/index.html');
    });

    var port = process.env.PORT || 8080;

    var server=app.listen(port,function(req,res){
        console.log("Catch the action at http://localhost:"+port);
    });
    
Now its done :)

-Amit Upadhyay
