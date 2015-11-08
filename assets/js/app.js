(function(){
angular.module('cheatcode',['ngRoute','controllers'])
	.config(['$routeProvider' ,'$locationProvider', function($routeProvider, $locationProvider){
		$locationProvider.html5Mode({
	  			enabled: true,
	  			//requireBase: true
			});
		$routeProvider
			.when("/",{
				templateUrl:"template/home/index.html"
			})
			.when("chemical/",{
				templateUrl:"template/chemical/index.html"
			})
			.otherwise({
				redirectTo:"/"
			});
			
	}]);
/*jQuery.scrollSpeed(100, 800);*/
}());

