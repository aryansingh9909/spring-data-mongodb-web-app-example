reviewFormApplication.service('reviewFormService', ['$http', function ($http) {

    var _reviewTypes = [
        {
            value: 'normal',
            text: 'Normal'
        },
        {
        	value: 'emergency',
        	text: 'Emergency'
        },
        {
        	value: 'dataFix',
        	text: 'Data Fix'
        }
    ];

    this.getReviewTypes = function() {
        return _reviewTypes;
    };

    this.submit = function(name, changeOrder, installDate, installTime, reviewDate, packages) {
    	return $http.get("/createReviewForm", {
    		params: {
    			name: name,
    			changeOrder: changeOrder,
    			installDate: installDate,
    			installTime: installTime,
    			reviewDate: reviewDate,
    			packages: packages
    		}
    	});
    };
    
    this.getAllReviews = function() {
    	return $http.get("/getAllReviews")
    }
}]);