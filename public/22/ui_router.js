//https://github.com/angular-ui/ui-router
var uiRouter = angular.module("uiRouter",["ui.router"]);

uiRouter.config(function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");

    $stateProvider
        .state("one", {
            url: "/one",
            template: '<div id="state">State one</div>'
        })
        .state("two", {
            url:"/two",
            template: '<div>Second state</div>'
        })
        .state("three", {
            url:"/three",
            template: '<div>The third of three states</div>'
        })
});


uiRouter.controller("AppCtrl", function AppCtrl() {
});
