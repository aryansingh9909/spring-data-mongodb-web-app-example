reviewFormApplication.controller('reviewFormController', ['$scope', '$location', 'reviewFormService', function($scope, $location, reviewFormService) {
	
	$scope.reviewTypes = reviewFormService.getReviewTypes();	
	$scope.reviewRequest = {};
	$scope.reviewRequest.type = $scope.reviewTypes[0];
	$scope.packages = [];
	
	$scope.add = function(string)
	{
		$scope.packages.push(string);
		$scope.package1 = "";
	}
	
	$scope.submit = function()
	{
		if(($scope.changeOrder[0] == "C" && $scope.changeOrder[1] == "O") || ($scope.changeOrder[0] == "c" && $scope.changeOrder[1] == "o")) {
			changeOrder = $scope.changeOrder.toUpperCase();
		}
		else {
			changeOrder = "CO" + $scope.changeOrder;
		};
		installDate = $scope.installMonth + $scope.installDay + $scope.installYear;
		installTime = $scope.installHours + $scope.installMinutes + $scope.installMeridiemPeriod;
		reviewDate = $scope.reviewDate;
		packages = $scope.packages;
		reviewFormService.submit($scope.name, changeOrder, installDate, installTime, reviewDate, packages);
		$location.path("/implementations");
	}
	
}]);