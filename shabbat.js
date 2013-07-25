var Shabbat = (function(){
    var children = [];


    var d = new Date();
	var year = d.getUTCFullYear();
	var month = d.getUTCMonth();
	var date = d.getUTCDate();
	var day = d.getDay();
	var dectime = parseFloat(d.getUTCHours() +'.'+ d.getUTCMinutes())

	var user_sun = new SunriseSunset( year, month, date, google.loader.ClientLocation.latitude, google.loader.ClientLocation.longitude); 

    
	return user_sun;

	if (day == 5) {

		if (dectime - user_sun.sunsetUtcHours() < .15 )
		{
			console.log("Shabbas!");
		}
	}

	else if (dat == 6 ) {



		if(dectime - user_sun.sunsetUtcHours() < -.40 )

		{

			console.log("Shabbas!");
		}
	}



 })();


