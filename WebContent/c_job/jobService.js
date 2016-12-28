/**
 * Created by ikism on Dec 6, 2016
 */
app.factory('jobService', function($http) {
	console.log('entering jobService')

	var BASE_URL = "http://localhost:8091/Collaboration"

	var jobService = this;

	jobService.fetchAllJobs = function() {
		console.log('fetching data in service')
		return $http.get(BASE_URL + "/job/getAllJobs").then(function(response) {
			return response.data
		}, function(response) {
			console.error('Error fetchingall data' + error)
		});
	};

	jobService.createJob = function(job) {
		console.log('entering createjob')
		return $http.post(BASE_URL + "/job/addJob/", job).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Jobs')
					return response.data
				});
	};

	jobService.updateJob = function(jobId, job) {
		console.log('entering update jobId : ' + jobId)
		console.log('entering update job :' + job)
		console.log(BASE_URL + "/job/updateJob/", jobId, job)
		return $http.put(BASE_URL + "/job/updateJob/" + jobId, job);
	};

	jobService.deleteJob = function(jobId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/job/deleteJob/" + jobId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};

	jobService.applyJob = function(jobId) {
		console.log('entering service Apply')
		return $http['get'](BASE_URL + "/job/applyJob/" + jobId).then(
				function(response) {
					console.log(response.status)
					return response.data
				}, function(errResponse) {
					console.log("Error while Applying: " + errResponse);
				})
	};

	jobService.getJob = function(jobId) {
		return $http.get(BASE_URL + "/job/getJobById/" + jobId)
	};

	return jobService;
})
