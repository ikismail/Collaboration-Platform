/**
 * Created by ikism on Dec 19, 2016
 */
// var a = angular.module('myApp.chatController');
app.controller('chatController', function($scope, chatService) {

	console.log('starting chatController')
	$scope.messages = [];
	$scope.message = "";
	$scope.max = 140;

	$scope.addMessage = function() {
		chatService.send($scope.message);
		$scope.message = "";
	};

	chatService.receive().then(null, null, function(message) {
		$scope.messages.push(message);
	});
});