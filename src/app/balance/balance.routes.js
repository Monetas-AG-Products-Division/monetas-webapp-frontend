(function() {
    'use strict';

    angular
    .module('app.balance')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab-view.balance', {
            url: '/balance',
            views: {
                'menuContent': {
                    templateUrl: 'app/balance/balance.html',
                    controller: 'BalanceController as vm'
                }
            }
        });
    }
})();
