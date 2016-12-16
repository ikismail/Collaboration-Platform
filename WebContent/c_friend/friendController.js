/**
 * Created by ikism on Dec 11, 2016
 */

app.controller('friendController', function(friendService, userService, $http, $scope,
		$location, $rootScope) {
	console.log('Entering friendController')

	$scope.friend = {
		id : '',
		friendId : '',
		userId : '',
		isOnline : '',
		status : ''
	};

	$scope.friends;

	$scope.user = {
		userId : '',
		fName : '',
		lName : '',
		role : '',
		emailId : '',
		phoneNo : '',
		address : '',
		password : '',
		reason : '',
		isOnline : '',
		errorCode : '',
		errorMessage : '',
		status : ''
	};

	$scope.users;

	$scope.sendFriendRequest = function(friendId) {
		console.log('->sendFriendRequest' + friendId)
		friendService.sendFriendRequest(friendId).then(function(d) {
			$scope.friend = d;
			alert("Friend Request Sent")
		}, function(errResponse) {
			console.log('Error : ' + errResponse)
		});
	};

	function getMyFriends() {
		console.log('Getting my friends')
		friendService.getMyFriends().then(function(d) {
			$scope.friends = d;
			console.log('Completed Friends List')
		}, function(errResponse) {
			console.log('Error : ' + errResponse)
		});
	}
	;

	$scope.unFriend = function(friendId) {
		friendService.unFriend(friendId).then(getMyFriends(),
				function(errResponse) {
					console.log('Error : ' + errResponse)
				});
	};
	
	$scope.acceptFriend = function(friendId) {
		friendService.acceptFriend(friendId).then(getMyFriends(),
				function(errResponse) {
					console.log('Error : ' + errResponse)
				});
	};
	
	$scope.rejectFriend = function(friendId) {
		friendService.rejectFriend(friendId).then(getMyFriends(),
				function(errResponse) {
					console.log('Error : ' + errResponse)
				});
	};
	
	
	function fetchAllUsers() {
		console.log('---entering getAllUsers Controller')
		userService.fetchAllUsers().then(function(data) {
			console.log('Controller Data' + data)
			$scope.users = data;
		}, function(error) {
			console.error('Error ' + error)
		});
	}
	;

	fetchAllUsers();
	getMyFriends();

})