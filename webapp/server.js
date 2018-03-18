var express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var file = 'config-data.json'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Show config UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/app.html'));
});

// Get the existing config
app.get('/configure', (req, res) => {
  jsonfile.readFile(file, function(err, obj) {
    (err) ? res.send('') : res.send(obj);
  })
});

// Update the config
app.post('/configure', (req, res) => {
    jsonfile.writeFile(file, req.body, function (err) {
      (err) ? err : res.send('Config saved.');
    })
});

app.listen(3000);
