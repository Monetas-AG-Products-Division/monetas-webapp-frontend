(function() {
    'use strict';

    angular
    .module('app.signup')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('signup', {
            url: '/signup',
            templateUrl: 'app/signup/signup.html',
            controller: 'SignupController as vm'
        });
    }
})();
