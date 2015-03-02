var directiveScope = angular.module("directiveScope",[]);

directiveScope.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.note = {
        date: "today",
        message:"I'm going down to cow town"
    };

    app.sayHello = function sayHello(date) {
        app.note.message = "I was updated: " + date;
    }
});

directiveScope.directive("wsComponent", function wsComponent() {
    return {
        restrict: "E",
        scope: {
            obj: "=",
            string: "@",
            hook: "&"
        },
        template:
            "<div ng-click='hook({date:obj.date})'>{{string}}</div>" +
            "<hr>" +
            "<div>{{obj.message}}</div>"
    }
});
