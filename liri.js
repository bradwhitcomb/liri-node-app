var request = require("request");
var nodeArgs = process.argv;
let action = process.argv[2];
var Twitter = require('twitter');
let value = process.argv[3];
var Spotify = require("node-spotify-api");

////JSON.parse(body).Released
//
//
var spotify = new Spotify({
 id: "21e32b9b23b044ada953c89c4409b4cd",
 secret: "46433a5a9e4747d489e9e1f3bc13f778"
});
// 
spotify.search({ type: 'track', query: "eli's coming", limit: 1 }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }
	console.log(data.tracks.items[0].album.name);
	//console.log(JSON.parse(data));
	//console.log (JSON.stringify(data)); 
	//console.log(JSON.stringify(data).tracks);
	//console.log("This is my test" + JSON.parse(choose).tracks);	
})
//
//


var myTweets = function() {
	var client = new Twitter({
	  consumer_key: 'iQeQtZRBKxHNql7CDbYy8kpYM',
	  consumer_secret: 'p8nge3Um8CqUS35TVnVPkKTpH34MdszqhLOpN6jm5kp76t3ZPO',
	  access_token_key: '941384945162997761-GPIUJva36RBxn53lGd3sEejU4dCjGUn',
	  access_token_secret: 'InYO5XrezQzrrWMibunM47wpuC1seIIwglqGSVNeJMNGS'
	});
	var params = {screen_name: '@jBradw1'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  // console.log(' look params',params)
	  if (!error) {
	    for (var i = 0; i < tweets.length; i++) {
	      console.log(tweets[i].text)
	    }
	  }
	  else {console.log("this error", error);}
	});
  };
//myTweets();









	//movie();  for some reason i cant run this in a function. I need to follow-up with instructors

//movie = ()=> {

var movie = function(){

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
	}
	if (action === "movie-this"){
		movie();
	}
	else if (action === "my-tweets"){
		myTweets();
	}

	//movie();






