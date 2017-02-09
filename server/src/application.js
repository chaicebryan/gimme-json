var retriever = require("./retriever.js");
var path = require("path");
var fs = require("fs");
var express = require("express");

var app = express();
var curFile = path.basename(__filename);
var port = 3000;
var MAIN = '/../../index.html';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    console.log('Serving ' + MAIN);
	var html = fs.readFileSync(__dirname + MAIN);
	res.end(html);
});

app.get('/requests', function(req, res) {
	var call = req.query.call;
	var decryptedRequest = decryptRequest(call);
	console.log("Recieved: " + decryptedRequest);

	retriever.makeExternalCall(decryptedRequest, res);
});

app.listen(port);
console.log('Server started: ' + curFile);
console.log('Listening on port ' + port)

var decryptRequest = function(request) {
    // Decrypt URL
	var encryptedRequest = new Buffer(request, 'base64');
	return encryptedRequest.toString()
}
