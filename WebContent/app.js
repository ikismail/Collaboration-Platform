/**
 * Created by ikismail on 30-Nov-16
 */

var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);

console.log('----Starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'c_user/login.html',
	}).when('/register', {
		templateUrl : 'c_user/register.html'
	}).when('/login', {
		templateUrl : 'c_user/login.html'
	}).when('/listOfUsers', {
		templateUrl : 'c_user/listOfUsers.html',
		controller : 'userController'
	}).when('/listofBlog', {
		templateUrl : 'c_blog/listofBlog.html',
		controller : 'blogController'
	}).when('/addNew', {
		templateUrl : 'c_blog/addNew.html',
		controller : 'blogController'
	}).when('/editBlog/:blogId', {
		templateUrl : 'c_blog/editBlog.html',
		controller : 'editBlogController'
	}).when('/listOfJobs', {
		templateUrl : 'c_job/jobList.html',
		controller : 'jobController'
	}).when('/addJob', {
		templateUrl : 'c_job/addJob.html',
		controller : 'jobController'
	}).when('/editJob/:jobId', {
		templateUrl : 'c_job/editJob.html',
		controller : 'editJobController'
	}).when('/friendList', {
		templateUrl : 'c_friend/friendList.html',
		controller : 'friendController'
	}).when('/userList', {
		templateUrl : 'c_friend/userList.html',
		controller : 'friendController'
	}).when('/chatPage', {
		templateUrl : 'c_chat/chatPage.html',
		controller : 'chatController'

	}).when('/uploadPicture', {
		templateUrl : 'c_user/uploadPicture.html'
	})

	.otherwise({
		redirectTo : '/'
	})
});
// angular.module('myApp.chatController', []);
// angular.module('myApp.chatService', []);
