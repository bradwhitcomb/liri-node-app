var request = require("request");
var nodeArgs = process.argv;
let action = process.argv[2];


if (action === "movie-this"){
	//movie();

	


//movie = ()=> {

 movieName = "";
	for (var i = 3; i < nodeArgs.length; i++) {
		if (i > 3 && i < nodeArgs.length) {
		movieName = movieName + "+" + nodeArgs[i];
	}
	else {
	movieName += nodeArgs[i];
	}
}
	request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
		if (!error && response.statusCode === 200) {

	console.log("The movie came out in " + JSON.parse(body).Released);
	console.log("The IMDB rating of the movie is " + JSON.parse(body).Ratings[0].Value);
	console.log("The Rotten Tomatoes Rating of the movie is "+ JSON.parse(body).Ratings[1].Value)
	console.log("The movie was produced in " + JSON.parse(body).Country);
	console.log("The language of the movie is " + JSON.parse(body).Language);
	console.log("The plot of the movie is " + JSON.parse(body).Plot);
	console.log("The actors in the movie are " + JSON.parse(body).Actors)
		}
	});
//	}
	}

	//movie();