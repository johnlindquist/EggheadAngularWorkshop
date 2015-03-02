var components = angular.module("components",[]);

components.directive("wsComponent", function wsComponent() {
    /*
    * restrict: "E" is no longer required for components, but it's still
    * recommended if you only want the directive to be used on elements
    * */
    return {
        restrict: "E",
        template: "<div>I'm an element and I'm OK, I sleep all night and I work all day</div>"
    }
});
