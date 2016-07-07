(function() {
    'use strict';

    angular
    .module('app.dash')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('dash', {
            url: '/dash',
            templateUrl: 'app/dash/dash.html',
            controller: 'DashController as vm'
        });
    }
})();
