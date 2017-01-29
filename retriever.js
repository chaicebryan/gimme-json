var requestService = require('request');

module.exports = {
	makeExternalCall: function(url, res) {
		requestService(url, function(error, response, body){
			console.log(body);

			// Send response back to client
			res.send(body);
		});
	}
}