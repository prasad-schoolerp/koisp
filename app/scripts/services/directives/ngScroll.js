/*******************************************************************************
 * Copyright (c) 2016. All rights reserved.
 ******************************************************************************/

koStation.directive('scroll', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 3) {
                 scope.isOpacityNav = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.isOpacityNav = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});