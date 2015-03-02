var uiRouterPartials = angular.module("uiRouterPartials",[]);

//https://github.com/angular-ui/ui-router
var uiRouterPartials = angular.module("uiRouterPartials", ["ui.router"]);

uiRouterPartials.config(function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");

    $stateProvider
        .state("one", {
            url: "/one",
            templateUrl: 'partials/one.html',
            controller: "OneCtrl as one"
        })
        .state("two", {
            url: "/two",
            template: '<div>Second state</div>'
        })
        .state("three", {
            url: "/three",
            template: '<div>The third of three states</div>'
        })
});


uiRouterPartials.controller("AppCtrl", function AppCtrl() {
});


uiRouterPartials.controller("OneCtrl", function OneCtrl() {
    var one = this;
    one.things = [
        {name: "John"},
        {name: "Frank"},
        {name: "Lenny"}
    ]

});
