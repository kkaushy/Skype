skypeApp.factory('userFactory', function($http){
	var urlBase = '/user';
	var _userService = {};

	_userService.getuserList = function(){
		return $http.get(urlBase);
	}

	return _userService;
});