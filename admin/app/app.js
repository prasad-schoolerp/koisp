var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'partials/login.html',
                controller: 'logoutCtrl'
            })
            
            .when('/plans', {
                title: 'plans',
                templateUrl: 'partials/plans.html',
                controller: 'plansCtrl'
            })
            .when('/carousal', {
                title: 'carousal',
                templateUrl: 'partials/carousal.html',
                controller: 'carousalCtrl',
            })
            .when('/', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl',
                role: '0'
            })
            .otherwise({
                redirectTo: '/login'
            });
  }])
.config(function ($windowProvider) {
   var $window = $windowProvider.$get();
 })
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                 var nextUrl = next.$$route.originalPath;
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                }
                else 
                {
                    if (nextUrl == '/login') 
                    {	
                    }   
                    else
                    {
                        $location.path("/login");
                    }
                }
                if((nextUrl == '/login' || nextUrl=='/') && $rootScope.authenticated==true)
                {
                     $location.path("/plans");
                }
                // if(nextUrl == '/signup' && $rootScope.email!='admin@admin.com')
		// {
			 // $location.path(current.$$route.originalPath);
		// }

            });
        });
    });