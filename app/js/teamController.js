/*
	app.js
	author:ollieSK8
*/
var teamController=angular.module('teamController',[]);

teamController.controller('teamListCtrl',['$scope','$http',function($scope,$http){
	$http.get('product/team.json').success(function(data){
		$scope.team=data;
	});
}]);

teamController.controller('teamSingleCtrl',['$scope','$http','$routeParams',
	function($scope,$http,$routeParams){
	$http.get('product/'+$routeParams.personId+'.json').success(function(data) {

      $scope.person= data[0];
      
    });

}]);
