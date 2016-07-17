(function() {
    'use strict';

    angular
    .module('app.send')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('send', {
            url: '/send',
            templateUrl: 'app/send/send.html',
            controller: 'SendController as vm'
        });
    }
})();
