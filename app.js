var express = require("express");
var app = express();


app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/about.html')
});

//listening on 
app.listen(3000, function() {
	console.log("listening on port 3000");
});

