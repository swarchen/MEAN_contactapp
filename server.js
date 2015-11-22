var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
	console.log('I received a GET request!');
	person1 = {
		name: 'Andy',
		email: 'jhaocheng.wu@gmail.com',
		number: '0988393123'
	};
	person2 = {
		name: 'John',
		email: 'John@gmail.com',
		number: '0911921921'
	};
	person3 = {
		name: 'Lucy',
		email: 'Lucy@gmail.com',
		number: '0911921921'
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log('server running port 3000');