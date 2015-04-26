skypeApp.controller('userlistCtrl', function($rootScope, $scope, userFactory, messageFactory){

	$scope.userList = [];
	$scope.chatList = [];
	

	$scope.createUser = function(){
		userFactory.createUser({
			"userName":"Kundan",
			"location":"Goa",
			"age":30
		}).then(function(data){
			console.log(data);
		})	
	}

	$scope.sendMessage = function(){
		message = {
			"message":$scope.message,
			"userId":$scope.activeChatUser._id,
			"senderId":$scope.loggedInUser._id
		}

		$scope.chatList.push(message);
		messageFactory.createMessage(message);
		$scope.message = "";
	}

	$scope.changeUser = function(userId){		
		user = getUser(userId);
		$scope.activeChatUser = user;
	}

	getUser = function(userId){
		for (index in $scope.userList){
			user = $scope.userList[index]
			if(user._id==userId){
				return user;	
			}			
		}
	}

	// $scope.createUser();
	userFactory.getuserList().then(function(response){
		$scope.userList= response.data;
		$scope.loggedInUser = $scope.userList[0];
	})

	messageFactory.getMessageList().then(function(response){
		$scope.chatList = response.data;
	})
});