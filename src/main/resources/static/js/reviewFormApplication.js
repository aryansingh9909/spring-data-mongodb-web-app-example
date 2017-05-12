var reviewFormApplication = angular.module('reviewFormApplication', ['ngRoute']);

reviewFormApplication.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
        	templateUrl: 'partials/reviewForm/name.html',
            controller: 'reviewFormController'
        }).when('/result', {
            templateUrl: 'partials/reviewForm/result.html',
            controller: 'reviewFormResultController'
        }).when('/implementations', {
            templateUrl: 'partials/reviewForm/implementations.html',
            controller: 'reviewFormImplementationsController'
        }).otherwise({
            redirectTo: '/'
        });
}]);