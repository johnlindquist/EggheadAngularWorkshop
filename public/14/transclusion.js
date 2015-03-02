var transclusion = angular.module("transclusion",[]);

transclusion.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.message = "I'm going down to cow town";

    app.sayHello = function sayHello() {
        alert("hello");
    }
});

transclusion.directive("bcComponent", function bcComponent() {
    return {
        restrict: "E",
        scope: {
            message: "=",
            string: "@",
            hook: "&"
        },
        template: "<div ng-click='hook()'>{{message}} ||| {{string}}</div>"
    }
});

transclusion.directive("bcContainer", function bcContainer() {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='well' ng-transclude=''></div>"
    }
})
