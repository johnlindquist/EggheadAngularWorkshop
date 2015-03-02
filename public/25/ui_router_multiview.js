//https://github.com/angular-ui/ui-router
var uiRouterMultiview = angular.module("uiRouterMultiview", ["ui.bootstrap", "ui.router"]);

uiRouterMultiview.config(function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");

    $stateProvider
        .state("one", {
            url: "/one",
            views: {
                "left":{
                    templateUrl: "partials/red.html"
                },
                "right":{
                    templateUrl: "partials/blue.html"
                }
            }
        })
        .state("two", {
            url: "/two",
            views: {
                "left":{
                    templateUrl: "partials/blue.html"
                },
                "right":{
                    templateUrl: "partials/red.html"
                }
            }
        })
});


uiRouterMultiview.controller("AppCtrl", function AppCtrl() {
});
