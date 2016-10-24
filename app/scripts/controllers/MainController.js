/*******************************************************************************
 * Copyright (c) 2014 VMware, Inc. All rights reserved.
 ******************************************************************************/
(function() {
	angular
	.module('koStation')
	.controller('MainController', ['$scope', '$rootScope', '$timeout', '$mdSidenav', '$log', '$http',
        function($scope, $rootScope, $timeout, $mdSidenav, $log, $http) {

            console.log("Inside MainController....");

            $scope.toggleLeft = buildToggler('left');

            $scope.toggleRight = buildToggler('right');
            function buildToggler(componentId) {
              return function() {
                $mdSidenav(componentId).toggle();
              }
            }

            $scope.sendMail = function() {
                console.log("$$"+JSON.stringify($scope.user));
                var api = './php/mail/mail.php?' + 'name=' + $scope.user.name + '&contact=' + $scope.user.contactno + '&email=' + $scope.user.email + '&msg=' + $scope.user.message;
                $http({
                  method: 'GET',
                  url: api
                }).then(function(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                  }, function(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                  });
            };
    
            
        }
    ]);
})();