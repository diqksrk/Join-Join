var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var underscore = require('underscore');

var app = express();
var server = require('http').Server(app);


//Setting up port for Heroku Deploy
var PORT = process.env.PORT;

//
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


//-hus-cdbr-iron-east-01.cleardb.net -ubf543e9cd3c6f8 -p
// CONNECT DB
// var conn = mysql.createConnection({
// 	host: "us-cdbr-iron-east-01.cleardb.net",
// 	user: "bf543e9cd3c6f8",
// 	password: "0dabca01"
// });
// conn.connect(function (err) {
// 	if (err) throw err;
// 	console.log('DB Connected!');
// });


// ROUTING
//라우팅 분리
var indexRouter = require('./routes/index.js');
app.use('/', indexRouter);
app.use('/index', indexRouter);

// app.get('/', function (req, res) {
// 	res.render('index.ejs');
// });

// app.get('/index', function(req, res){
// 	res.render('index.ejs');
// })

// app.get('/login', function (req, res) {
// 	res.render('login.ejs');
// });



// RUN SERVER
server.listen(PORT, function () {
	console.log(`Listening on ${server.address().port}`);
});