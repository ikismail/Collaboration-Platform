/**
 * Created by ikism on Nov 30, 2016
 */

app.controller('blogController', function($scope, blogService, $location) {
	console.log('entering blog controller')

	$scope.blog = {
		blogId : '',
		blogCreatedDate : '',
		title : '',
		description : '',
		likes : '',
		dislikes : '',
		reason : '',
		status : '',
		userId : ''
	};

	$scope.blogs;

	function fetchAllBlogs() {
		console.log('entering fetchAll blogs in controller')
		blogService.fetchAllBlogs().then(function(data) {
			$scope.blogs = data;
		}, function(error) {
			console.log('Error : ' + error)
		});
	}
	;
	fetchAllBlogs();

	$scope.createBlog = function(blog) {
		console.log('create Blog...')
		blogService.createBlog(blog).then(fetchAllBlogs(),
				function(errResponse) {
					console.error('Error while Creating Blog')
				});
	};

	$scope.updateBlog = function(blogId) {
		console.log('entering updateBlog in controller' + blogId)
		blogService.updateBlog(blogId).then(fetchAllBlogs(),
				function(errResponse) {
					console.error('Error while updating : ' + errResponse)
				});
	};

	$scope.updateBlog = function() {
		{
			console.log('updating', $scope.blog.blogId)
			$scope.updateBlog($scope.blog.blogId);
		}
	}

	$scope.submit = function() {
		{
			console.log('saving Blog' + $scope.blog)
			$scope.createBlog($scope.blog);
		}
		$scope.reset();
		$location.path("/listofBlog")
	};

	$scope.deleteBlog = function(blogId) {
		console.log('entering deleteBlog in controller blogId : ' + blogId)
		blogService.deleteBlog(blogId).then(function() {
			console.log('Deleted Successfully')
			alert('Deleted Successfully')
			fetchAllBlogs();

		}, function() {
			console.log('Unable to delete')
		})
	};

	$scope.upvoteBlog = function(blogId) {
		console.log('entering upvote controller')
		blogService.upvoteBlog(blogId).then(function() {
			console.log('Upvoted')
			fetchAllBlogs();
		}, function() {
			console.log('unable to upvote')
		})
	};

	$scope.downvoteBlog = function(blogId) {
		console.log('entering upvote controller')
		blogService.downvoteBlog(blogId).then(function() {
			console.log('downvoted')
			fetchAllBlogs();
		}, function() {
			console.log('unable to downvote')
		})
	};

	$scope.reset = function() {
		$scope.blog = {
			blogId : '',
			blogCreatedDate : '',
			title : '',
			description : '',
			likes : '',
			dislikes : '',
			reason : '',
			status : '',
			userId : ''
		};
		$scope.myForm.$setPristine();
	};

});