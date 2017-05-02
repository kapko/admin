const express = require('express'),
	router = express.Router(),
	mongojs = require('mongojs'),
	config = require('../config.js'),
	DB = mongojs(config.db, ['about']);

router.get('', (req, res) => {
	DB.about.find((err, body) => {
		res.send(body);
	})
});

router.put('', (req, res) => {
	const data = req.body;

	DB.about.update(
		{name: 'about'}, data, {}, (err, body) => {
		if(err)return res.send(err);

		res.send(body);
	})
});

module.exports = router;
