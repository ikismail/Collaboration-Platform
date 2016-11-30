/**
 * Created by ikis on 30-Nov-2016
 */

app.factory('userService', function($http) {
	console.log('-----starting userService.js')

	var BASE_URL = "http://localhost:8091/Cart"

	return {
		fetchAllUsers : function() {

			console.log('----entering getAllUsers')
			return $http.get(BASE_URL + "/getAllUsers").then(
					function(response) {
						console.log('Data : ' + response.data)
						return response.data
					}, function(response) {
						console.log('Error : ' + response.data)
						return response.data
					});
		},
		createUser : function(user) {
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
		}

	}
});
