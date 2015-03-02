var directiveBasics = angular.module("directiveBasics", []);

directiveBasics.directive("wsDirective", function () {
    /*
     while return a function isn't used much anymore,
     it's extremely important for understaind the Angular
     source and older examples
     */
    return function link(scope, element, attrs) {
        scope.$watch(attrs.wsDirective, function $watch(newVal) {
            element.append(newVal);
        })
    }
});
