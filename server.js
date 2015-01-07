var http = require('http');
var express = require('express');
var app = express();
var url = require('url');
var proxy = require('proxy-middleware');
var logger = require('morgan');

app.use(logger({ immediate: true, format: 'dev' }));

app.use(express.static(__dirname + '/static'));

var canned = require('canned'),
    http = require('http'),
    opts = { cors: true, logger: process.stdout }

can = canned('.', opts);
app.use(can);


var port = 5000;
app.get('/events', events.findAll);
app.get('/events/:id', events.findById);
app.post('/events', events.addEvent);
app.put('/events/:id', events.updateEvent);
app.delete('/events/:id', events.deleteEvent);

 
http.createServer(app).listen(port, function() {
  console.log('Frontend listening at %s', port);
});
