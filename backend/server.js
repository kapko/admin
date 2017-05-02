const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
	ejs = require('ejs'),
	about = require('./routes/about.js');

app
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	.use(express.static(__dirname + '/../dist/'))
	.set('views', __dirname + '/../dist/')
	.engine('html', ejs.renderFile)
	.set('view engine', 'html')
	.listen('8080', ()=>{});

// API //
app
	.use('/api/about', about);

app
	.get('/', (req, res) => res.render('./index.html'))
	.get('**', (req, res) => res.render('index.html'));

