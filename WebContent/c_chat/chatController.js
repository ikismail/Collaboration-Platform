/**
 * Created by ikism on Dec 19, 2016
 */
// var a = angular.module('myApp.chatController');
app.controller('chatController', function($scope, $rootScope, chatService) {

	console.log('starting chatController')
	$scope.messages = [];
	$scope.message = "";
	$scope.max = 140;

	$scope.addMessage = function() {
		console.log('AddMessage method');
		chatService.send($rootScope.currentUser.lName + " : " + $scope.message);
		$scope.message = "";
	};

	chatService.receive().then(null, null, function(message) {
		console.log('recieve Method')
		$scope.messages.push(message);
	});
});