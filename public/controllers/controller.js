function AppCtrl ($scope, $http){
	console.log('hello');

	$http.get('/contactlist').success(function(response){
		console.log('I got the data that I requested!');
		$scope.contactlist = response;
	})

}