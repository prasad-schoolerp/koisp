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
            }
        ]);
})();