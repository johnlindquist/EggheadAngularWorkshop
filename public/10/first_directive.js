var firstDirective = angular.module("firstDirective",[]);

firstDirective.directive("wsDirective", function wsDirective() {
    return function link() {
        console.log("I do nothing and proud of it!");
    }
});
