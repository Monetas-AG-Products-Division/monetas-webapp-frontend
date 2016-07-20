(function() {
    'use strict';

    angular
    .module('app.balance-history')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('page.balance-history', {
            url: '/balance-history',
            views: {
                'content': {
                    templateUrl: 'app/balance-history/balance-history.html',
                    controller: 'BalanceHistoryController as vm'
                }
            }
        });
    }
})();
