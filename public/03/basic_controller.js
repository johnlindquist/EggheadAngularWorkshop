var basicController = angular.module("basicController",[]);

basicController.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.message = "Hello";
});
