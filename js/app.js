/*
	app.js
	author:ollieSK8
*/
var appinit=angular.module('appinit',['ngRoute','teamController']);

//加载 routeProvider
/*
	模块初始化
	如果后续路径是/team 执行team-list.html模板 ,绑定teamListCtrl控制器
	如果后续路径是/人员id  执行team-single.html模板 ,绑定teamSingleCtrl控制器
*/
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