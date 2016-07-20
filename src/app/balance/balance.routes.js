(function() {
    'use strict';

    angular
    .module('app.balance')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.balance', {
            url: '/balance',
            views: {
                'content': {
                    templateUrl: 'app/balance/balance.html',
                    controller: 'BalanceController as vm'
                }
            }
        });
    }
})();
