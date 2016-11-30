/**
 * created by ikism on 30-Nov-2016
 */

app.controller('userController', function($scope, userService) {
	console.log('-----starting controller')

	var self = this;
	self.user = {
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

	self.users;

	self.fetchAllUsers = function() {
		console.log('---entering getAllUsers Controller')
		userService.fetchAllUsers()
		.then(function(data) {
			console.log('Controller Data' + data)
			self.users = data;
		}, function(error) {
			console.error('Error ' + error)
		});
	};

	self.createUser = function(user) {
		console.log('entering create user in controller')
		userService.createUser(user).then(self.fetchAllUsers, function(error) {
			consol.error('Error while creating user')
		});
	};

	self.submit = function() {
		{
			console.log('Saving New User', self.user);
			self.createUser(self.user);
		}
		self.reset();
	}

	self.reset = function() {
		self.user = {
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