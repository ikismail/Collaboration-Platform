/**
 * Created by ikism on Nov 30, 2016
 */

app.factory('blogService', function($http) {
	console.log('starting blogService')
	var BASE_URL = "http://localhost:8091/Collaboration"

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
	};

	blogService.createBlog = function(blog) {
		console.log('entering createBlog')
		return $http.post(BASE_URL + "/blog/create/", blog).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Blogs')
					return response.data
				});
	};

	blogService.updateBlog = function(blogId, blog) {
		console.log('entering update BlogId : ' + blogId)
		console.log('entering update Blog :' + blog)
		console.log(BASE_URL + "/blog/updateBlog/", blogId, blog)
		return $http.put(BASE_URL + "/blog/updateBlog/" + blogId, blog);
	};

	blogService.deleteBlog = function(blogId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/blog/" + blogId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};

	blogService.upvoteBlog = function(blogId) {
		console.log('entering upvote service')
		return $http.get(BASE_URL + "/blog/upvote/" + blogId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(reponse.status)
				})
	};

	blogService.downvoteBlog = function(blogId) {
		console.log('entering downvote service')
		return $http.get(BASE_URL + "/blog/downvote/" + blogId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(reponse.status)
				})
	};

	blogService.getBlog = function(blogId) {
		return $http.get(BASE_URL + "/blog/getBlog/" + blogId)
	};

	return blogService;

})