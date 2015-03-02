var http = angular.module("http",[]);

http.controller("AppCtrl", function AppCtrl($http) {
    var app = this;

    $http.get("/games")
        .success(function success(result) {
            app.games = result;
        })
});
