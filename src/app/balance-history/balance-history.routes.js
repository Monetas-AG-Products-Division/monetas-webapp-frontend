(function() {
    'use strict';

    angular
    .module('app.balance-history')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('balance-history', {
            url: '/balance-history',
            templateUrl: 'app/balance-history/balance-history.html',
            controller: 'BalanceHistoryController as vm'
        });
    }
})();
