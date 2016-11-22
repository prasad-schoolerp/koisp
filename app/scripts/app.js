/*******************************************************************************
 * Copyright (c) 2016
 ******************************************************************************/

var koStation = angular.module('koStation', ['ngRoute', 'ui.bootstrap', 'ngMaterial']);

koStation.config(function($routeProvider){
    
    //Starting appFlight UI config. Mapping the URLs to the controllers and the templates");
    $routeProvider
    .when('/', {
    	controller: 'HomeController',
        templateUrl: 'app/views/home.html'
    })
    .when('/contact-us', {
    	controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
    })
    .when('/plans', {
        controller: 'PlansController',
        templateUrl: 'app/views/plans.html'
    });
    
    return koStation; 
});
