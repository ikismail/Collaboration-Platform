/**
 * created by ikism on 30-Nov-2016
 */

app.controller('userController', function($scope, userService) {
	console.log('-----starting controller')

	$scope.user = {
		userId : '',
		fName : '',
		lName : '',
		role : 'STUDENT',
		emailId : '',
		phoneNo : '',
		address : '',
		isOnline : '',
		errorCode : '',
		errorMessage : '',
		status : ''
	};

	$scope.users;

	  function fetchAllUsers() {
		console.log('---entering getAllUsers Controller')
		userService.fetchAllUsers()
		.then(function(data) {
			console.log('Controller Data' + data)
			$scope.users = data;
		}, function(error) {
			console.error('Error ' + error)
		});
	};
	fetchAllUsers();

	$scope.createUser = function(user) {
		console.log('entering create user in controller')
		userService.createUser(user)
		.then(fetchAllUsers(), function(error) {
			consol.error('Error while creating user')
		});
	};

	$scope.submit = function() {
		{
			console.log('Saving New User', $scope.user);
			$scope.createUser($scope.user);
		}
		$scope.reset();
	}

	$scope.reset = function() {
		$scope.user = {
			userId : '',
			fName : '',
			lName : '',
			role : 'STUDENT',
			emailId : '',
			phoneNo : '',
			address : '',
			isOnline : '',
			errorCode : '',
			errorMessage : '',
			status : ''
		};
		$scope.myForm.$setPristine();
	};
})