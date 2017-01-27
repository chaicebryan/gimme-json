var port = 3000;
var serverUrl = "127.0.0.1";
var KEY = 'URL';

var retriever = require("./retriever.js"); 
var path = require("path");
var fs = require("fs");
var express = require("express");
var CryptoJs = require("crypto-js");

var app = express();

console.log('Static file set to ' + __dirname + '/public');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('Reading file: ' + __dirname + '/main.html');
	var html = fs.readFileSync(__dirname + '/main.html');
	res.end(html);
});

app.get('/requests', function(req, res) {
	var call = req.query.call;
	var decryptedRequest = decryptRequest(call);
	console.log("Recieved: " + decryptedRequest);

	var rawJson = retriever.makeExternalCall(decryptedRequest.toString());
	res.send(rawJson);
});

app.listen(3000);

var decryptRequest = function(request) {
	return CryptoJs.AES.decrypt(request, KEY).toString(CryptoJs.enc.Utf8);
}
