let express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
	// ejs = require('ejs');
app
	.use(bodyParser.urlencoded())
	.use(bodyParser.json())
	// .use(express.static(__dirname + '/'));
	// .set('views', __dirname + '/src')
	// .engine('html', ejs.renderFile)
	// .set('view engine', 'html');

app.get('/admin', (req, res) => {
	res.send('admin');
});

app.listen('8000', ()=>{});

