/*******************************************************************************
 * Copyright (c) 2014 VMware, Inc. All rights reserved.
 ******************************************************************************/
(function() {
	angular
	.module('koStation')
	.controller('ContactController', ['$scope', '$rootScope', '$http', '$timeout',
        function($scope, $rootScope, $http, $timeout) {

            console.log("Inside ContactController....");

            $scope.sendMail = function() {
                console.log("$$"+JSON.stringify($scope.user));
                var api = './php/mail/mail.php?' + 'name=' + $scope.user.name + '&contact=' + $scope.user.contactno + '&email=' + $scope.user.email + '&msg=' + $scope.user.message;
                $http({
                  method: 'GET',
                  url: api
                }).then(function(response) {
                    $scope.user = {};
                    $scope.isSent = true;
                    $timeout(function() {
                      $scope.isSent = false;
                    }, 5000);
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