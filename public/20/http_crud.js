var httpCrud = angular.module("httpCrud",[]);

httpCrud.controller("AppCtrl", function AppCtrl($http) {
    var app = this;
    app.people = [];
    app.selectedPerson = {};

    var api = "/people";

    function loadPeople() {
        $http.get(api)
            .success(function success(results) {
                app.people = results;
            })
    }

    loadPeople();

    app.selectPerson = function selectPerson(person) {
        $http.get(api + "/" + person.id)
            .success(function success(result) {
                app.selectedPerson = result;
            })
    };

    app.savePerson = function savePerson(person) {
        console.log(person);
        $http.put(api + "/" + person.id, person)
            .success(function success(result) {
                loadPeople();
            })
    };

    app.addPerson = function addPerson(person) {
        $http.post(api, person)
            .success(function success(result) {
                app.selectedPerson = result;
                loadPeople();
            })
    };

    app.deletePerson = function deletePerson(person) {
        $http.delete(api + "/" + person.id)
            .success(function success() {
                loadPeople();
            })
    };

    app.newPerson = function newPerson() {
        app.selectedPerson = {};
    }
});
