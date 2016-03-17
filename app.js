var mainController = angular.module('bricksFe', []);

mainController.controller('BrickCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/api/v1/stats/')
         .success(function(data) {
             $scope.sets = data.sets;
             $scope.insights = data.insights;
             $scope.shops = data.shops;
             $scope.links = data.links;
         });
});
