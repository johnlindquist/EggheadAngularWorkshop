var controllerMethods = angular.module("controllerMethods",[]);


controllerMethods.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.message = "";
    app.savedMessage = "update me";

    app.update = function update(message) {
        app.savedMessage = message;
    }
});
