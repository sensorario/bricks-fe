var bricksControllers = angular.module('bricksControllers', []);

bricksControllers.controller('BrickCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // console.log('BrickCtrl');
        $http.get('http://localhost:8080/api/v1/stats/')
             .success(function(data) {
                 $scope.sets = data.sets;
                 $scope.insights = data.insights;
                 $scope.shops = data.shops;
             });
    }
]);

bricksControllers.controller('SetCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // console.log('SetCtrl');
        $http.get('http://localhost:8080/api/v1/set/')
             .success(function(data) {
                 $scope.sets = data.collection;
             });
    }
]);

bricksControllers.controller('InsightCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // console.log('InsightCtrl');
        $http.get('http://localhost:8080/api/v1/insight/')
             .success(function(data) {
                 $scope.insights = data.collection;
             });
    }
]);

bricksControllers.controller('ShopCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // console.log('ShopCtrl');
        $http.get('http://localhost:8080/api/v1/shop/')
             .success(function(data) {
                 $scope.shops = data.collection;
             });
    }
]);

bricksControllers.controller('ResourcesCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // console.log('ResourcesCtrl');
        $http.get('http://localhost:8080/api/v1/resources/')
             .success(function(data) {
                 var routesCollection = {
                     DELETE:[],
                     POST:[],
                     GET:[]
                 };

                 for (path in data) {
                     var splittedPath = path.split('_');
                     var verb = splittedPath[0];
                     eval('routesCollection.' + verb  + '.push(splittedPath)');
                 }

                 $scope.publicResources = routesCollection;
             });
    }
]);
