/**
 * Created by ikism on Dec 9, 2016
 */

app.controller('editJobController', function($scope, jobService, $routeParams,
		$location) {
	console.log('entering editJobController')

	var jobId = $routeParams.jobId;

	$scope.job = jobService.getJob(jobId).then(function(response) {
		console.log(response.status)
		$scope.job = response.data;
	}, null)

	$scope.update = function() {
		console.log('entering update function')
		jobService.updateJob(jobId, $scope.job)
		console.log('updated successfully');
		alert('updated successfully');
		$location.path('/listOfJobs');
	}
})