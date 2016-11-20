/*******************************************************************************
 * Copyright (c) 2014 VMware, Inc. All rights reserved.
 ******************************************************************************/
(function() {
	angular
	.module('koStation')
	.controller('PlansController', ['$scope', '$rootScope', '$http', '$timeout',
        function($scope, $rootScope, $http, $timeout) {

            console.log("Inside PlansController....");

            var tabs = [
          { title: 'Facebook', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'WhatsApp', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'SMS', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'WhatsApp', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'WhatsApp', content: "If you remove a tab, it will try to select a new one."}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;

    
    
            
        }
    ]);
})();