
var someOtherModule = angular.module("someOtherModule", []);
someOtherModule.value("framework", {
    title: "Angular 1.3 (loaded from another module)"
});

//bootcamp requires "someOtherModule"
var bootcamp = angular.module("bootcamp", ["someOtherModule"]);
bootcamp.controller("AppCtrl", function AppCtrl(framework) {
    var app = this;

    app.framework = framework;
});

var multiModules = angular.module("multiModules",["bootcamp"]);
