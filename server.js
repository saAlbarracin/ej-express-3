const express = require('express');
const app = express();

app.get('/', function(req, res) {
    console.log('Info que me llega', req);
    res.sendFile(__dirname + "/index.html")
  });

 
app.get('/saludo', function(req, res) {
  res.send("HOLAAAAAAAAAA")
});
app.get('/foto', function(req, res) {
    console.log('Info que me llega', req);
    res.sendFile(__dirname + "/nodejs.png")
  })
 
app.listen(3074, function() {
    console.log("Listo el servidor, con puerto 3074...");
});