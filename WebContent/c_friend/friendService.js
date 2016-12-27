/**
 * Created by ikism on Dec 11, 2016
 */

app.factory('friendService', function($http, $rootScope) {
	console.log('entering friendService')

	var BASE_URL = "http://localhost:8091/Collaboration"

	var friendService = this;

	friendService.getMyFriends = function() {
		return $http.get(BASE_URL + "/myfriends").then(function(response) {
			return response.data
		},function(errResponse){
			console.log('Error while getting myfriends')
		});
	},
	
	friendService.getNewfriendRequest = function(){
		return $http.get(BASE_URL + "/getMyFriendRequests/").then(function(response){
			return response.data;
		},function(errResponse){
			console.log('Error while getting friendRequest')
		});
	}

	friendService.sendFriendRequest = function(friendId) {
		return $http.get(BASE_URL + "/sendFriendRequest/" + friendId).then(function(response) {
			return response.data;
		}, function(errResponse) {
			console.log('Error SendFriendRequest: ' + errResponse)
		});

	},

	friendService.unFriend = function(friendId) {
		return $http.get(BASE_URL + "/unfriend/" + friendId).then(
				function(response) {
					return response.data;
				}, function(errResponse) {
					console.log('Error Unfriend: ' + errResponse)

				});
	};

	friendService.acceptFriend = function(friendId) {
		return $http.get(BASE_URL + "/acceptfriend/" + friendId).then(
				function(response) {
					return response.data;
				}, function(errResponse) {
					console.log('Error AcceptFriend: ' + errResponse)

				});
	};
	
	friendService.rejectFriend = function(friendId) {
		return $http.get(BASE_URL + "/rejectfriend/" + friendId).then(
				function(response) {
					return response.data;
				}, function(errResponse) {
					console.log('Error: RejectFrined ' + errResponse)

				});
	};

	return friendService;
})