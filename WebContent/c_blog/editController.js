/**
 * Created by ikism on Dec 5, 2016
 */
app.controller('editBlogController', function($scope, $routeParams, $location,
		blogService) {
	console.log('entering editController')

	var blogId = $routeParams.blogId;

	$scope.blog = blogService.getBlog(blogId).then(function(response) {
		console.log(response.status)
		$scope.blog = response.data;
	}, null)

	$scope.update = function() {
		console.log('entering update function')
		blogService.updateBlog(blogId, $scope.blog);
		console.log('updated successfully')
		alert('updated successfully');
		$location.path('/');
	};

})