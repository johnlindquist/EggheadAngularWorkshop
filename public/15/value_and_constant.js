var valueAndConstant = angular.module("valueAndConstant",[]);

valueAndConstant.constant("DAY", 24);

valueAndConstant.value("vacation", false);

valueAndConstant.controller("AppCtrl", function AppCtrl(DAY, vacation) {
    var app = this;

    app.day = DAY;
    app.vacation = vacation;
});
