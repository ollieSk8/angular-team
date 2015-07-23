/*
	app.js
	author:ollieSK8
*/
var teamController=angular.module('teamController',[]);

/*
	teamListCtrl控制器  异步加载team.json 绑定到控制器$scope.team上
*/

teamController.controller('teamListCtrl',['$scope','$http',function($scope,$http){
	$http.get('product/team.json').success(function(data){
		$scope.team=data;
	});
}]);

/*
	teamSingleCtrl控制器  异步加载（personId）.json 绑定到控制器$scope.person上
*/

teamController.controller('teamSingleCtrl',['$scope','$http','$routeParams',
	function($scope,$http,$routeParams){
	$http.get('product/'+$routeParams.personId+'.json').success(function(data) {

      $scope.person= data[0];
      
    });

}]);
