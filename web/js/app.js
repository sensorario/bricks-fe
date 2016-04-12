var brickApp = angular.module('bricksFe', [
    'ngRoute',
    'bricksControllers',
]);

brickApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'web/partials/home.html',
                controller: 'BrickCtrl'
            }).
            when('/sets', {
                templateUrl: 'web/partials/sets.html',
                controller: 'SetCtrl'
            }).
            when('/insights', {
                templateUrl: 'web/partials/insights.html',
                controller: 'InsightCtrl'
            }).
            when('/shops', {
                templateUrl: 'web/partials/shops.html',
                controller: 'ShopCtrl'
            })
        ;
    }
]);
