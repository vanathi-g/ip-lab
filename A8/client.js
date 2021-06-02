const http = require('http');
const options = { host: 'localhost', port: '8080', path: '/index.html' };

function callback(response) {
	var body = '';
	response.on('data', function(data) {
		body += data;
	});

	response.on('end', function() {
		console.log(body);
	});
}

const req = http.request(options, callback);
req.end();