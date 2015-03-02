var httpInterceptor = angular.module("httpInterceptor", []);


httpInterceptor.config(function config($httpProvider) {
    $httpProvider.interceptors.push(function interceptor() {
        return {
            request: function request(config) {
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            response: function response(response) {
                response.config.responseTimestamp = new Date().getTime();
                return response;
            }
        };
    });
});

httpInterceptor.controller("AppCtrl", function AppCtrl($http) {
    var app = this;
    app.people = [];
    app.selectedPerson = {};

    var api = "/people";

    function loadPeople() {
        $http.get(api)
            .success(function success(results, status, header, config) {
                console.log("Round trip took: " + ((config.responseTimestamp - config.requestTimestamp) / 1000) + " seconds");
                app.people = results;
            })
    }

    loadPeople();


})

s
