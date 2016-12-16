/**
 * Created by ikism on Dec 2, 2016
 */

app.controller('commentController',
		function($scope, commentService, $location) {
			console.log('entering comment Controller')

			$scope.comment = {
				commentId : '',
				comment : '',
				blogId : '',
				userId : '',
				commentedDate : ''
			};

			$scope.comments;

			$scope.fetchAllComments = function(blogId) {
				console.log('entering getllComments')
				commentService.fetchAllComments(blogId).then(function(data) {
					$scope.comments = data;
				}, function(error) {
					console.error('Error while fetching')
				})
			};

			$scope.createComment = function(comment) {
				console.log('entering create comment')
				commentService.createComment(comment).then(
						console.log('saved'), function(error) {
							console.log('Error while creating comment')
						})
			};

			$scope.submit = function(){
				{
					console.log('saving comment')
					$scope.createComment($scope.comment)
				}
				$scope.reset();
				$location.path("/listofBlog")
			};
			$scope.reset = function() {
				$scope.comment = {
					commentId : '',
					comment : '',
					blogId : '',
					userId : '',
					commentedDate : ''
				};
				$scope.myForm.$setPristine();
			}

		})