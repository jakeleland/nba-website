
var teamPlayers = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/players/teamId/6",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "dbfef459a9mshed01df175eeb8e3p1036aejsn1038e6d055a6"
	}
};

$.ajax(teamPlayers).done(function (response) {
	console.log(response['api']['players']);
	var x = 0;
	for(let i = 0; i < response['api']['players'].length; i++) {
		var player = response['api']['players'][x];
		var standard = player['leagues']['standard'];
		if(player['yearsPro'] != 0 && standard != undefined) {
			let height = Math.round(player['heightInMeters'] / 0.3048 * 10);
			let weight = Math.ceil(player['weightInKilograms'] * 2.20462);
			let feet = height.toString().slice(0,1);
			let inch = height.toString().slice (1,2);

			let name = player['firstName']+" "+ player['lastName'];
			let number = standard['jersey'];
			let position = standard['pos'];
			let college = player['collegeName'];
			let dob = player['dateOfBirth'];
			let yearspro = player['yearsPro'];
			// console.log( player['firstName']+" "+ player['lastName'] +" "+ standard['jersey'] + " " + standard['pos']
			// 	+ " " + player['collegeName']
			// 	+ " " + player['dateOfBirth']
			// 	+ " " + player['heightInMeters']
			// 	+ " " + player['weightInKilograms']
			// 	+ " " + player['yearsPro']);
			document.getElementById('name'+x).innerHTML = name;
			document.getElementById('number'+x).innerHTML = number;
			document.getElementById('position'+x).innerHTML = position;
			document.getElementById('college'+x).innerHTML = college;
			document.getElementById('dob'+x).innerHTML = dob;
			document.getElementById('height'+x).innerHTML = feet +"'"+ inch+'"';
			document.getElementById('weight'+x).innerHTML = weight;
			document.getElementById('years-pro'+x).innerHTML = yearspro;
			x++;
		}
	}
});