(function() {
    'use strict';

    angular
    .module('app.send')
    .controller('SendController', SendController);

    SendController.$inject = ['$state', '$ionicTabsDelegate', 
    'ContactsService', 'BalanceHistoryService', '$ionicPopup'];

    /* @ngInject */
    function SendController($state, $ionicTabsDelegate, ContactsService, BalanceHistoryService, $ionicPopup) {
        var vm = this;
        vm.doSend = doSend;
        ContactsService.getAll(function(data) {
          vm.contacts = data.result || [];
        });
        vm.payment = {};

        activate();

        ////////////////
        function activate() {
        }

        function doSend() {
            console.log('send money');

            BalanceHistoryService.add({
                currency: 'USD',
                amount: vm.payment.amount,
                contact: vm.payment.contact
            });

            var alertPopup = $ionicPopup.alert({
                title: 'Congratulations',
                template: 'Payment were sent'
            });

            alertPopup.then(function(res) {
                $state.go('page.balance-history');
            });

        }
    }
})();
