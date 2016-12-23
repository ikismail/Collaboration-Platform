/**
 * created by ikism on 30-Nov-2016
 */

app
		.controller(
				'userController',
				function($scope, userService, $http, $rootScope, $location,
						$cookies) {
					console.log('-----starting controller')

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

					function fetchAllUsers() {
						console.log('---entering getAllUsers Controller')
						userService.fetchAllUsers().then(function(data) {
							console.log('Controller Data' + data)
							$scope.users = data;
						}, function(error) {
							console.log('Error ' + error)
						});
					}
					;
					fetchAllUsers();

					$scope.createUser = function(user) {
						console.log('entering create user in controller')
						userService
								.createUser(user)
								.then(
										function(response) {
											console
													.log('registered Successfully'
															+ response.status)
											$scope.user = {};
											$scope.user.errorMessage = "Registered Successfully";
											$location.path("/login")
										},
										function(error) {
											consol
													.error('Error while creating user')
											$scope.user = {};
											$scope.user.errorMessage = "Error while creating user please try again";
											$location.path("/register")
										});
					};

					$scope.submit = function() {
						{
							console.log('Saving New User', $scope.user);
							$scope.createUser($scope.user);
						}

					};

					$scope.authenticate = function(user) {
						console.log('enering authenticate in controller')
						userService
								.authenticate(user)
								.then(
										function(d) {
											$scope.user = d;
											console.log('userErrorCode'
													+ $scope.user.errorCode)
											if ($scope.user.errorCode == '404') {
												$scope.user.errorMessage = "Invalid Credentials";
												$scope.user.emailId = '';
												$scope.user.password = '';
											} else {
												console
														.log('Valid credentials. Navigating to home')
												$rootScope.currentUser = $scope.user
												$http.defaults.headers.common['Authorization'] = 'Basic'
														+ $rootScope.currentUser;
												$cookies.put('currentUser',
														$rootScope.currentUser);
												$location.path("/listofBlog")
											}
										},
										function(errResponse) {
											console
													.error('Error while authenticating User')
											$scope.user.errorMessage = "Invalid Credentials please check your Id or password";
											$scope.user.emailId = '';
											$scope.user.password = '';
										});
					};

					$scope.login = function() {

						{
							console.log('login validation ', $scope.user)
							$scope.authenticate($scope.user);

						}
					}

					$rootScope.logout = function() {
						console.log('logging out')
						$cookies.remove('currentUser');
						delete $rootScope.currentUser;
						userService.logout();
						$location.path("/login");
						$scope.user.errorMessage = "Logout out Successfully";
						$scope.user.emailId = '';
						$scope.user.password = '';

					}

					$scope.reset = function() {
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
						$scope.myForm.$setPristine();
					};
				})