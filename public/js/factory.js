skypeApp.factory('userFactory', function($http){
	var urlBase = '/user';
	var _userService = {};

	_userService.getuserList = function(){
		return $http.get(urlBase);
	}

	_userService.createUser = function(User){
		return $http.post(urlBase, User);
	}

	return _userService;
});