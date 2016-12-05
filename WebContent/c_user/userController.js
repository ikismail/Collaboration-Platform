/**
 * created by ikism on 30-Nov-2016
 */

app
		.controller(
				'userController',
				function($scope, userService, $http, $rootScope, $location) {
					console.log('-----starting controller')

					$scope.user = {
						userId : '',
						fName : '',
						lName : '',
						role : '',
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
						userService.fetchAllUsers().then(function(data) {
							console.log('Controller Data' + data)
							$scope.users = data;
						}, function(error) {
							console.error('Error ' + error)
						});
					}
					;
					fetchAllUsers();

					$scope.createUser = function(user) {
						console.log('entering create user in controller')
						userService.createUser(user).then(fetchAllUsers(),
								function(error) {
									consol.error('Error while creating user')
								});
					};

					$scope.submit = function() {
						{
							console.log('Saving New User', $scope.user);
							$scope.createUser($scope.user);
						}
						$scope.reset();
					};

					$scope.authenticate = function(user) {
						console.log('enering authenticate in controller')
						userService
								.authenticate(user)
								.then(
										function(d) {
											$scope.user = d;
											if ($scope.user.errorCode == '404') {
												console.log($scope.user.errorMessage)
														$scope.user.emailId = '',
														$scope.user.password = '';
											} else {
												console
														.log('Valid credentials. Navigating to home')
												$rootScope.currentUser = $scope.user
												$http.defaults.headers.common['Authorization'] = 'Basic'
														+ $rootScope.currentUser;
												$location.path('/')
											}
										},
										function(errResponse) {
											console
													.error('Error while authenticating User')
										});
					};

					$scope.login = function() {

						{
							console.log('login validation ', $scope.user)
							$scope.authenticate($scope.user);
						}
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
							isOnline : '',
							errorCode : '',
							errorMessage : '',
							status : ''
						};
						$scope.myForm.$setPristine();
					};
				})