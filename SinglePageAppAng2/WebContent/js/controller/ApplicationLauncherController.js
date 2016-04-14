singlePageApp.controller('ApplicationLauncherController',['$scope','$rootScope','LauncherService', function($scope,$rootScope,LauncherService){
	var own=this;
	own.url="sprest/adminRest/findAll";
	own.urlGet="sprest/adminRest/findObj/3001";
	own.launcherObj={id:'1001',userName:'admin'};
	$scope.screenTitle="Concep(In)novation";
	own.allObjects=[];
	own.info =function(){
		LauncherService.search(own.launcherObj,own.url,own.success,own.failure);
	};
	
	own.infoget= function(){
		LauncherService.searchGet(own.urlGet,own.success,own.failure);
	};
	own.success= function(data){
		alert(data.id);
	};
	own.failure= function(data){
		alert(data);
	};
}]);