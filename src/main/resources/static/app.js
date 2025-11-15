var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/secondPage', {
            templateUrl: 'secondPage.html',
            controller: 'SecondPageController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.goToSecondPage = function() {
        $location.path('/secondPage');
    };
}]);

app.controller('SecondPageController', ['$scope', function($scope) {
    $scope.message = 'Welcome to the second page!';
}]);
