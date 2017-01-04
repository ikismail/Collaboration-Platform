/**
 * Created by ikism on Dec 19, 2016
 */
// var b = anguar.module('myApp.chatService')
app.service('chatService', function($q, $timeout) {

	console.log('starting chatService')
	var BASE_URL = "http://localhost:8091/Collaboration";

	var service = {}, listener = $q.defer(), socket = {
		client : null,
		stomp : null
	}, messageIds = [];

	service.RECONNECT_TIMEOUT = 30000;
	service.SOCKET_URL = BASE_URL + "/chat";
	service.CHAT_TOPIC = "/topic/message";
	service.CHAT_BROKER = "/app/chat";

	service.receive = function() {
		console.log('Recieve Service')
		return listener.promise;
	};

	service.send = function(message) {
		var id = Math.floor(Math.random() * 1000000);
		console.log('Send Id: ' + id);
		socket.stomp.send(service.CHAT_BROKER, {
			priority : 9
		}, JSON.stringify({
			message : message,
			id : id
		}));
		messageIds.push(id);
	};

	var reconnect = function() {
		$timeout(function() {
			console.log('reconnect')
			initialize();
		}, this.RECONNECT_TIMEOUT);
	};

	var getMessage = function(data) {
		var message = JSON.parse(data), out = {};
		console.log('Message: ' + message);
		alert(message);
		out.message = message.message;
		out.time = new Date(message.time);
		return out;
	};

	var startListener = function() {
		socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
			console.log('starting listener')
			listener.notify(getMessage(data.body));
		});
	};

	var initialize = function() {
		console.log('starting initialize')
		socket.client = new SockJS(service.SOCKET_URL);
		socket.stomp = Stomp.over(socket.client);
		socket.stomp.connect({}, startListener);
		socket.stomp.onclose = reconnect;
	};

	initialize();
	return service;
});