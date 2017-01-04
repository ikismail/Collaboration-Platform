/**
 * Created by ikism on Dec 11, 2016
 */

app.controller('friendController', function(friendService, userService, $http,
		$scope, $location, $rootScope) {
	console.log('Entering friendController')

	$scope.friend = {
		id : '',
		friendId : '',
		userID : '',
		isOnline : '',
		status : ''
	};

	$scope.myFriends;
	$scope.friendRequests;

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

	// disable the button after sending friend request
	$scope.disableButton = function(friend) {
		friend.disabled = true;
	}

	$scope.sendFriendRequest = function(friendId) {
		console.log('->sendFriendRequest' + friendId)
		friendService.sendFriendRequest(friendId).then(function(d) {
			$scope.friend = d;
			alert("Friend Request Sent")
			$location.path("/userList")
		}, function(errResponse) {
			console.log('Error : ' + errResponse)
		});
	};

	// getting my friend lists
	function getMyFriends() {
		console.log('Getting my friends')
		friendService.getMyFriends().then(function(d) {
			$scope.myFriends = d;
			console.log('Completed Friends List')
		}, function(errResponse) {
			console.log('Error : ' + errResponse)
		});
	}
	;
	// Getting my new friend requests
	function getMyFriendRequests() {
		console.log('Getting my friends')
		friendService.getNewfriendRequest().then(function(d) {
			$scope.friendRequests = d;
			console.log('Completed FriendRequest List')
		}, function(errResponse) {
			console.log('Error : ' + errResponse)
		});
	}
	;

	// unfriend
	$scope.unFriend = function(friendId) {
		friendService.unFriend(friendId).then(function(response) {
			console.log('Unfriend....')
			getMyFriends();
			$location.path("/friendList");
		}, function(errResponse) {
			console.log('Error while unfriend')
		});
	};
	// acceptfriend
	$scope.acceptFriend = function(friendId) {
		friendService.acceptFriend(friendId).then(function(response) {
			console.log('Accepted....')
			getMyFriendRequests();
			getMyFriends();
			$location.path("/friendList");
		}, function(errResponse) {
			console.log('Error while Accepting friendRequest')
		});
	};
	// rejectfriend
	$scope.rejectFriend = function(friendId) {
		friendService.rejectFriend(friendId).then(function(response) {
			console.log('Rejected....')
			getMyFriendRequests();
			$location.path("/friendList");
		}, function(errResponse) {
			console.log('Error while Reject friendRequest')
		});
	};

	// for searching purpose
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
	getMyFriendRequests();
	getMyFriends();

})