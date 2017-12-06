var Client = require('node-rest-client').Client;
 
var client = new Client();


var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;


app.get("/getFeed", function (req, res) {
  var url = req.query.url
  console.log(url)
  
  client.get(url, function (data, response) {
      res.send(data);
  });
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);