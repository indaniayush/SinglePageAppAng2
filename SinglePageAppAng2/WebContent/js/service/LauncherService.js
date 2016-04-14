singlePageApp.factory('LauncherService',['$http', '$q', function($http, $q){
	return{
		search: function(launcherObj,url,success,failure){
			return $http.post(url,launcherObj).then(
						function(response){
							success(response.data);
						},
						function(errResponse){
							console.log('Error while fetching users');
							failure($q.reject(errResponse));
						}
					);
		},
		searchGet: function(url,success,failure){
			return $http.get(url).then(
						function(response){
							success(response.data);
						},
						function(errResponse){
							console.log('Error while fetching userObject');
							failure($q.reject(errResponse));
						}
					);
		}
	};
}]);