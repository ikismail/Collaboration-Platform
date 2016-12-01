/**
 * Created by ikism on Nov 30, 2016
 */

app.controller('blogController', function($scope, blogService) {
	console.log('entering blog controller')

	$scope.blog = {
		blogId : '',
		blogCreatedDate : '',
		title : '',
		description : '',
		likes : '',
		dislike : '',
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
		blogService.createBlog(blog)
		.then(fetchAllBlogs(),
				function(errResponse) {
					console.error('Error while Creating Blog')
				});
	};

	$scope.submit = function() {
		{
			console.log('saving Blog', $scope.blog)
			$scope.createBlog($scope.blog);
		}
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.blog = {
			blogId : '',
			blogCreatedDate : '',
			title : '',
			description : '',
			likes : '',
			dislike : '',
			reason : '',
			status : '',
			userId : ''
		};
		$scope.myForm.$setPristine();
	};

});