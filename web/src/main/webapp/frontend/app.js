(function () {'use strict';

var app = angular.module('sampleApplication', []);

app.controller('sampleController', function ($scope) {
	
	$scope.test = 'test web app';
	$scope.typeList = [{id: 1, name: 'ได้'}, {id: 2, name: 'ไม่ได้'}];
});

})();

//(function () {'use strict';
//
//var app = angular.module('sampleApplication', []);
//
//app.controller('sampleController', function ($scope) {
//	
//	$scope.test = 'test web app';
//	$scope.typeList = [{id: 1, name: 'yes'}, {id: 2, name: 'no'}];
//});
//
//})();


//define(['app', 'services/province'], function(app){app.controller('SubpoenaOutsideFormEditController', ['$scope',function($scope){
//	
//	var ctrl = this;
//	
//	ctrl.init = function() {};
//	
//}]);
//});