var factoryAndService = angular.module("factoryAndService",[]);

factoryAndService.constant("DAY", 24);

factoryAndService.value("vacation", true);

factoryAndService.factory("job", function job(vacation) {
    return {
        type:"software developer",
        vacation: vacation
    }
});

factoryAndService.service("calendar", function Calendar(DAY) {
    this.getWeek = function () {
        return DAY * 7;
    }
});


factoryAndService.controller("AppCtrl", function AppCtrl(job, calendar) {
    var app = this;

    app.job = job;
    app.week = calendar.getWeek();
});
