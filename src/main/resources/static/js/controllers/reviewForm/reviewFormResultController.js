reviewFormApplication.controller('reviewFormResultController', ['$scope', '$routeParams', 'reviewFormService', function($scope, $routeParams, reviewFormService) {

	var name = $routeParams.name;
	var changeOrder = $routeParams.changeOrder;
	var installDate = $routeParams.installDate;
	var installTime = $routeParams.installTime;
	var reviewDate = $routeParams.reviewDate;
	var packages = $routeParams.packages;
	
	$scope.reviewFormSubmitResponse = {};
	
	reviewFormService.createReviewForm(name, changeOrder, installDate, installTime, reviewDate, packages).
	then(function(response) {
		$scope.reviewFormSubmitResponse = response.data;
		console.log($scope.reviewFormSubmitResponse);
	});
}]);
