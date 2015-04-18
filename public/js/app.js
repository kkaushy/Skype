

skypeApp = angular.module('skypeApp',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when("/",{
			templateUrl:'partials/userlist.html',
			controller:'userlistCtrl'
		}).otherwise({
			redirectTo:'/'
		});

	});