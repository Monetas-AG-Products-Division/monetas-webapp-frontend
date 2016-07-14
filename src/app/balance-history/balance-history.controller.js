(function() {
    'use strict';

    angular
    .module('app.balance-history')
    .controller('BalanceHistoryController', BalanceHistoryController);

    BalanceHistoryController.$inject = ['BalanceHistoryService'];

    /* @ngInject */
    function BalanceHistoryController(BalanceHistoryService) {
        var vm = this;
        vm.history = [];
        vm.remove = remove;

        activate();

        ////////////////


        function activate() {
            vm.history = BalanceHistoryService.all();
        }

        function remove(transaction) {
            BalanceHistoryService.remove(transaction);
        }
    }
})();
