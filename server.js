
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req,res){

	//for testing just get one page. hotel california. print page.
	url = 'https://tabs.ultimate-guitar.com/print/22671';

	request(url, function(error, response, html){
		if(!error) {
			var $ = cheerio.load(html);

			var tab, title, artist;
			var json = { title: "", artist: "", tab:""};
		}
	});

});

app.listen('8081');

console.log('Listening on port 8081');

exports = module.exports  = app;

