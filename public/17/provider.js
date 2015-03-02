var provider = angular.module("provider",[]);


provider.constant("VERSION", "1.3");

provider.provider("framework", function framework() {
    var whichVersion;

    this.setVersion = function (version) {
        whichVersion = version;
    };


    this.$get = function $get() {
        return {
            title: "Angular " + whichVersion
        }
    }
});

/*
* You can "match up" constants and providers in the .config() phase
* */
provider.config(function config(frameworkProvider, VERSION) {
    frameworkProvider.setVersion(VERSION);
});


provider.controller("AppCtrl", function AppCtrl(framework) {
    var app = this;

    app.framework = framework.title;
});
