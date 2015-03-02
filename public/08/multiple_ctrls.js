var multipleCtrls = angular.module("multipleCtrls",[]);

multipleCtrls.controller("AppCtrl", function AppCtrl() {
    var app = this;
    app.message = "App says hi";
});

multipleCtrls.controller("AdminCtrl", function AdminCtrl() {
    var admin = this;
    admin.message = "The admin also says hi";
});

multipleCtrls.controller("DashboardCtrl", function DashboardCtrl() {
    var dash = this;
    dash.message = "The dash says hi too";
});
