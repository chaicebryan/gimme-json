var retriever = require("./retriever.js");
var path = require("path");
var fs = require("fs");
var express = require("express");

var app = express();
var curFile = path.basename(__filename);
var port = 3000;
var serverUrl = "127.0.0.1";
var MAIN = '/../../index.html';

// Serve static files from /public with the /assets endpoint
app.use('/assets', express.static(__dirname + '/../../public'));

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
