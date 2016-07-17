(function() {
    'use strict';

    angular
    .module('app.balance-history')
    .controller('BalanceHistoryController', BalanceHistoryController);

    BalanceHistoryController.$inject = ['TransferService'];

    /* @ngInject */
    function BalanceHistoryController(TransferService) {
        var vm = this;
        vm.history = [];
        vm.remove = remove;

        activate();

        ////////////////


        function activate() {
            TransferService.getAll(function(data) {
                console.log(data);
                vm.history = data.result;
            });
        }

        function remove(transaction) {
            TransferService.remove(transaction, function(data) {
                activate();         
            });
        }
    }
})();
