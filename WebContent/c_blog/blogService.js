/**
 * Created by ikism on Nov 30, 2016
 */

app.factory('blogService', function($http) {
	console.log('starting blogService')
	var BASE_URL = "http://localhost:8091/Cart"

	var blogService = this;
	blogService.fetchAllBlogs = function() {
		console.log('entering getAllBlogs')
		return $http.get(BASE_URL + "/blog/getAllblogs").then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while getting all Blogs')
					return response.data
				});
	}
	

	blogService.createBlog = function(blog) {
		console.log('entering createBlog')
		return $http.post(BASE_URL + "/blog/create/", blog).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Blogs')
					return response.data
				});
	}
	return blogService;

})