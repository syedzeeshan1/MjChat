(function () {
    "use strict";
    //var app = angular.module('mainApp', ['ngRoute','ngCookies']);
    app.controller('adminDashboardController', function ($scope , $http, $location, $rootScope, AuthenticationService) {
        console.log($rootScope.globals);
        $scope.current = $rootScope.globals.currentUser.username;
        $scope.logout = function()
        {
            
                AuthenticationService.ClearCredentials();
                $location.path('/');
        };
        $http({
            "method": "GET",
            "url": "http://mohsin52.pythonanywhere.com/api/adminApprove"
        })
        .then(function(response){
            
            $scope.data = response.data.success;
            console.log($scope.data);
        });
    });
}());    