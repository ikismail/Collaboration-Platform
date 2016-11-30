/**
 * Created by ikismail on 30-Nov-16
 */

var app = angular.module('myApp', [ 'ngRoute' ]);

console.log('----Starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'c_common/home.html'
	})

	// User Module
	.when('/register', {
		templateUrl : 'c_user/register.html',
		controller : 'userController'
	}).when('/login', {
		templateUrl : 'c_user/login.html',
		controller : 'userController'
	}).when('/listOfUsers', {
		templateUrl : 'c_user/listOfUsers.html',
		controller : 'userController'
	})

	// Blog Module

	.when('/listofBlog', {
		templateUrl : 'c_blog/listofBlog.html',
		controller : 'blogController'
	}).when('/addNew', {
		templateUrl : 'c_blog/addNew.html'

	})
	.otherwise({redirectTo:'/'})
})