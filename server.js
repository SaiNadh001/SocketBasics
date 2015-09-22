
var app = require('express')();
var port = process.env.PORT || 4000;

var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
	socket.broadcast.emit('greetings', "Hello everyone..!")
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

server.listen(port, function(){
	console.log("running on : "+port)
});
