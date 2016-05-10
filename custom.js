$(document). ready(function(){
	console.log("Test from jQery");

	$("#topPanel").animate( 
			{ top : "-=100px"}, //decrease 100 pixels from the top,
		 	5000 ); //take 5000 ms (5 secs) to move


	$("#bottomPanel").animate( 
	{	bottom : "-=100px"}, //decrease 100 pixels from the top
	5000); //duration


	}); //document refers to the HTML page

