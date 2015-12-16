var jade = require('jade');
var express = require('express');
app = module.exports.app = express();

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8080)

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });
app.configure(function() {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('home.jade');
});
app.listen(8080);

io.sockets.on('connection', function (socket) {
    //our other events...
});

socket.on('setPseudo', function (data) {
    socket.set('pseudo', data);
});

socket.on('message', function (message) {
    socket.get('pseudo', function (error, name) {
        var data = { 'message' : message, pseudo : name };
        socket.broadcast.emit('message', data);
        console.log("user " + name + " send this : " + message);
    })
});