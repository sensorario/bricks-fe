var brickApp = angular.module('bricksFe', [
    'ngRoute',
    'bricksControllers',
]);

brickApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pages/home.html',
                controller: 'BrickCtrl'
            }).
            when('/sets', {
                templateUrl: 'pages/sets.html',
                controller: 'SetCtrl'
            }).
            when('/insights', {
                templateUrl: 'pages/insights.html',
                controller: 'InsightCtrl'
            })
        ;
    }
]);
