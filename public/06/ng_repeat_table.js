var ngRepeatTable = angular.module("ngRepeatTable",[]);

ngRepeatTable.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.people = [
        {
            name: "Sherlock",
            feature: "Crime solver"
        },
        {
            name: "Watson",
            feature: "Life Saver"
        },
        {
            name: "Mrs Hudson",
            feature: "Building owner"
        }

    ];
});
