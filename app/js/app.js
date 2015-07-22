/*
	app.js
	author:ollieSK8
*/
var appinit=angular.module('appinit',['ngRoute','teamController']);

//加载 routeProvider

appinit.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/team',{
		templateUrl:'tmpl/team-list.html',
		controller:'teamListCtrl'
	}).
	when('/team/:personId',{
		templateUrl:'tmpl/team-single.html',
		controller:'teamSingleCtrl'
	}).
	otherwise({ redirectTo: '/team'});
}]);