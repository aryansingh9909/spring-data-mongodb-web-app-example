reviewFormApplication.controller('reviewFormImplementationsController', ['$scope', 'reviewFormService', function($scope, reviewFormService) {

	$scope.reviewFormSubmitResponse = {};
	
	reviewFormService.getAllReviews().
	then(function(response) {
		$scope.reviewFormSubmitResponse = response.data;
		console.log($scope.reviewFormSubmitResponse);
	});
}]);
