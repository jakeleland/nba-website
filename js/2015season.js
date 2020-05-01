function getSeason() { var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-nba-v1.p.rapidapi.com/games/seasonYear/2015",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "dbfef459a9mshed01df175eeb8e3p1036aejsn1038e6d055a6"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response['api']['games']);
	let r = 1;
	for(let i = 110; i < 1427; i++) {
		if (response['api']['games'][i]['vTeam']['teamId'] == 6 || response['api']['games'][i]['hTeam']['teamId'] == 6) {
			var homeTeam = response['api']['games'][i]['hTeam'];
			var visitingTeam = response['api']['games'][i]['vTeam'];
			if (visitingTeam['logo'] == "" || homeTeam['logo'] == "") {
				document.getElementById('game'+r+'vtl').src = "img/cavs.png";
			}
			else {
				document.getElementById('game'+r+'vtl').src = visitingTeam['logo'];
			}

			if (homeTeam['logo'] == "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Detroit_Pistons_logo.svg/1200px-Detroit_Pistons_logo.svg.png" || visitingTeam['logo'] == "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Detroit_Pistons_logo.svg/1200px-Detroit_Pistons_logo.svg.png") {
				console.log(visitingTeam['logo'], homeTeam['logo']);
				document.getElementById('game'+r+'htl').src = "img/pistons.png";
			}
			else {
				document.getElementById('game'+r+'htl').src = homeTeam['logo'];
			}

			document.getElementById('game'+r+'ht').innerHTML = homeTeam['fullName'];
			document.getElementById('game'+r+'vt').innerHTML = visitingTeam['fullName'];
			document.getElementById('game'+r+'score').innerHTML = homeTeam['score']['points'] + ' - ' + visitingTeam['score']['points'];
			var d = new Date(response['api']['games'][i]['startTimeUTC']);
			document.getElementById('date'+r).innerHTML = d.toString().slice(0, 15);

			if (parseInt(homeTeam['score']['points']) > parseInt(visitingTeam['score']['points'])) {
				var element = document.getElementById('game'+r+'ht');
				element.classList.add("winner");
			}
			else {
				var element1 = document.getElementById('game'+r+'vt');
				element1.classList.add("winner");
			}

			r++;
		}
	}
});

// var standings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2018/conference/east",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "dbfef459a9mshed01df175eeb8e3p1036aejsn1038e6d055a6"
// 	}
// }
//
// $.ajax(standings).done(function (response) {
// 	console.log(response);
// });