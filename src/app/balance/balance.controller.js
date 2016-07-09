(function() {
    'use strict';

    angular
    .module('app.balance')
    .controller('BalanceController', BalanceController);

    BalanceController.$inject = ['$state', '$ionicTabsDelegate'];

    /* @ngInject */
    function BalanceController($state, $ionicTabsDelegate) {
        var vm = this;
        vm.balance = {
            amount: 2032,
            currency: 'USD'
        };

        vm.title = '123';

        activate();

        ////////////////
        function activate() {
        }
    }
})();
