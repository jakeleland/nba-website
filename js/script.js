// var teamName = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://api-nba-v1.p.rapidapi.com/teams/teamId/6",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "dbfef459a9mshed01df175eeb8e3p1036aejsn1038e6d055a6"
// 	}
// };
//
// $.ajax(teamName).done(function (response) {
// 	var team = response['api']['teams'][0];
// 	console.log(team);
//
// 	document.getElementById('full-name').innerHTML = team['fullName'];
// 	document.getElementById('logo').src = team['logo'];
// 	// document.getElementById('short-name').innerHTML = team['shortName'];
// });


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
	var g = 0;
	for(let i = 0; i < response['api']['players'].length; i++) {
		var player = response['api']['players'][i];
		var standard = player['leagues']['standard'];
		if(player['yearsPro'] != 0 && standard != undefined) {
			console.log( player['firstName']+" "+ player['lastName'] +" "+ standard['jersey'] + " " + standard['pos']);

			document.getElementById('player' + x).innerHTML = player['firstName'] + " "+ player['lastName'] +" "+ standard['jersey'] +" "+ standard['pos'];
			x++;
		}
	}
});
