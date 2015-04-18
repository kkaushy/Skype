skypeApp.controller('userlistCtrl', function($rootScope, $scope, userFactory){
	$scope.userList = [];
	

	userFactory.getuserList().then(function(data){
		$scope.userList= data.data
	})
});