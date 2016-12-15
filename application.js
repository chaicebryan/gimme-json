// Code taken from Node.js for Front-End Developers by Garann Means (p. 9-10)

var port = 3000;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path");
var fs = require("fs");
var express = require("express");

var app = express();

console.log('Static file set to ' + __dirname + '/public');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('Reading file: ' + __dirname + '/main.html');
		var html = fs.readFileSync(__dirname + '/main.html');
		res.end(html);
});

app.listen(3000);
