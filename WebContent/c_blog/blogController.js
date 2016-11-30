/**
 * Created by ikism on Nov 30, 2016
 */

app.controller('blogController', function($scope, blogService) {
	console.log('entering blog controller')

	var self = this;

	self.blog = {
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

	self.createBlog = function(blog) {
		console.log('create Blog...')
		blogService.createBlog(blog).then(fetchAllBlogs(),
				function(errResponse) {
					console.error('Error while Creating Blog')
				});
	};

	self.submit = function() {
		{
			console.log('saving Blog', self.blog)
			self.createBlog(self.blog);
		}
		self.reset();
	};

	self.reset = function() {
		self.blog = {
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