var singlePageApp=angular.module('singlePageApp',['ngRoute','ngResource','ngCookies','chieffancypants.loadingBar'])
.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

singlePageApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/get', {
			controller : 'ApplicationLauncherController',
			templateUrl : 'pages/GetHTML.html'
		})
		.when('/post', {
			controller : 'ApplicationLauncherController',
			templateUrl : 'pages/PostHTML.html'
		})
		.when('/none', {
			controller : 'ApplicationLauncherController',
			templateUrl : 'pages/NoneCall.html'
		})
		.otherwise({
			redirectTo: '/none'
		});
}]);