const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(__dirname + '/build/favicon.ico'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 4000
app.listen(port, () => console.log("Server is running on port ", port));