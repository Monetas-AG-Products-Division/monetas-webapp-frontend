(function() {
    'use strict';

    angular
    .module('app.login')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController as vm'
        });
    }
})();
