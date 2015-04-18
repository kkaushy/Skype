skypeApp.controller('userlistCtrl', function($rootScope, $scope, userFactory){
	$scope.userList = [];
	
	$scope.createUser = function(){
		userFactory.createUser({
			"userName":"kaushal",
			"location":"Pune",
			"age":28
		}).then(function(data){
			console.log(data);
		})	
	}

	// $scope.createUser();
	userFactory.getuserList().then(function(data){
		$scope.userList= data.data		
	})
});