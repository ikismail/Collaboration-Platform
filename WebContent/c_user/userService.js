/**
 * Created by ikis on 30-Nov-2016
 */

app.factory('userService', function($http) {
	console.log('-----starting userService.js')

	var BASE_URL = "http://localhost:8091/Collaboration"

	var userService = this;

	userService.fetchAllUsers = function() {

		console.log('----entering getAllUsers')
		return $http.get(BASE_URL + "/getAllUsers").then(function(response) {
			console.log('Status : ' + response.status)
			return response.data
		}, function(response) {
			console.log('Error : ' + response.data)
			return response.data
		});
	}, userService.createUser = function(user) {
		console.log('entering create user in service')
		return $http.post(BASE_URL + "/user/register", user).then(
				function(response) {
					console.log('creating user')
					console.log('Status :' + response.status)
					return response.data
				}, function(errResponse) {

					console.log('Error while creating user')
					return response.data
				});
	}, userService.authenticate = function(user) {
		console.log('entering authentication in services User :' + user)
		return $http.post(BASE_URL + "/user/validate/", user).then(
				function(response) {
					console.log('Status :' + response.status)
					return response.data;
				}, null);
	}, 
	userService.logout = function(){
		console.log('logout')
		return $http.get(BASE_URL+'/user/logout/')
        .then(
                function(response){
                    return response.data;
                }, 
              null
        );
	};

	return userService;

});
