var ngRepeat = angular.module("ngRepeat",[]);

ngRepeat.controller("AppCtrl", function AppCtrl() {
    this.people = [
        {name: "Susan"},
        {name: "Joe"},
        {name: "Claire"}
    ]
});
