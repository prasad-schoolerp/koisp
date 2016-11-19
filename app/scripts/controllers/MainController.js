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

                $scope.fetchCarouselSlider = function() {
                    var api = 'php/api/v1/getCarousalData';
                    $http({
                        method: 'GET',
                        url: api
                    }).then(function(response) {
                        if(response.data) {

                        }
                    }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                };

                $scope.fetchCarouselSlider();
            }
        ]);
})();