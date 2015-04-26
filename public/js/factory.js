skypeApp.factory('userFactory', function($http){
	var urlBase = '/user';
	var _userService = {};

	_userService.getuserList = function(){
		return $http.get(urlBase);
	}

	_userService.createUser = function(User){
		return $http.post(urlBase, User);
	}

	_userService.getChatList = function(user){
		return $http.get("/user/:userid/chat")
	}

	return _userService;
});

skypeApp.factory('messageFactory', function($http){
	var urlBase = '/message';
	var _messageService = {};

	_messageService.getMessageList = function(){
		return $http.get(urlBase);
	}

	_messageService.createMessage = function(message){
		return $http.post(urlBase, message);
	}

	// _userService.getChatList = function(user){
	// 	return $http.get("/user/:userid/chat")
	// }

	return _messageService;
});