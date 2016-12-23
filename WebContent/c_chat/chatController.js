/**
 * Created by ikism on Dec 19, 2016
 */

var a = angular.module("chatApp.controllers")
a.controller('ChatCtrl', function($scope, ChatService) {
	$scope.messages = [];
	$scope.message = "";
	$scope.max = 140;

	$scope.addMessage = function() {
		ChatService.send($scope.message);
		$scope.message = "";
	};

	ChatService.receive().then(null, null, function(message) {
		$scope.messages.push(message);
	});
})