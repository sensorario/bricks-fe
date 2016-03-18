var brickApp = angular.module('bricksFe', [
    'ngRoute',
    'bricksControllers',
]);

brickApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'resources/partials/home.html',
                controller: 'BrickCtrl'
            }).
            when('/sets', {
                templateUrl: 'resources/partials/sets.html',
                controller: 'SetCtrl'
            }).
            when('/insights', {
                templateUrl: 'resources/partials/insights.html',
                controller: 'InsightCtrl'
            }).
            when('/shops', {
                templateUrl: 'resources/partials/shops.html',
                controller: 'ShopCtrl'
            })
        ;
    }
]);
