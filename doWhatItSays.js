

var fs = require("fs");


fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);

});
var x = require("./liri.js")

if (this.action === "do-what-it-says"){
	song();
}
