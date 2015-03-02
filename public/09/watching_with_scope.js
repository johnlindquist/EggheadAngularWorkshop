var watchingWithScope = angular.module("watchingWithScope",[]);

watchingWithScope.controller("AppCtrl", function AppCtrl($scope) {
    var app = this;

    $scope.$watch("app.message", function $watch(newVal, oldVal) {
        console.log(newVal + " | " + oldVal);
    })
});

watchingWithScope.controller("DashboardCtrl", function DashboardCtrl($scope) {
    var dash = this;
    dash.items = [];

    dash.addItem = function addItem() {
        dash.items.push(Math.random());
    };

    dash.removeItem = function removeItem() {
        dash.items.pop();
    };

    $scope.$watchCollection("dash.items", function $watchCollection(newVal, oldVal) {
        console.log(newVal)
    });
});
