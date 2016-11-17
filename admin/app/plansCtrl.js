app.controller('plansCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,ShareData) {

$scope.$on('$viewContentLoaded', function(event) {
 		
});


	    $rootScope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});





