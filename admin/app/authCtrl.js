app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
$scope.$on('$viewContentLoaded', function(event) {
    if($rootScope.authenticated == true)
    {
        $location.path('/plans')
    }
	
});

    $scope.login = {};
    $scope.doLogin = function (customer) {
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('/plans');
            }
        });
    };
   

	
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});