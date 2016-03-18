var bricksControllers = angular.module('bricksControllers', []);

bricksControllers.controller('BrickCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        console.log('BrickCtrl');
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
        console.log('SetCtrl');
        $http.get('http://localhost:8080/api/v1/sets/')
             .success(function(data) {
                 $scope.sets = data.collection;
             });
    }
]);

bricksControllers.controller('InsightCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        console.log('InsightCtrl');
        $http.get('http://localhost:8080/api/v1/insights/')
             .success(function(data) {
                 $scope.insights = data.collection;
             });
    }
]);

bricksControllers.controller('ShopCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        console.log('ShopCtrl');
        $http.get('http://localhost:8080/api/v1/shops/')
             .success(function(data) {
                 $scope.shops = data.collection;
             });
    }
]);
