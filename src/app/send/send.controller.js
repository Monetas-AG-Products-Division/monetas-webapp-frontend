(function() {
    'use strict';

    angular
    .module('app.send')
    .controller('SendController', SendController);

    SendController.$inject = ['$state', '$ionicTabsDelegate', 'ContactsService', 'TransferService', '$ionicPopup', '$window'];

    /* @ngInject */
    function SendController($state, $ionicTabsDelegate, ContactsService, TransferService, $ionicPopup, $window) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.units = profile.units;
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

            var data = {
                amount: vm.payment.amount, 
                fee: 0,
                message: vm.payment.message || '',
                recipient: vm.payment.contact.user._id,
                unit: vm.payment.unit
            };

            TransferService.send(data, function(result) {
                console.log(result);
                var alertPopup = $ionicPopup.alert({
                    title: 'Congratulations',
                    template: 'Payment were sent'
                });

                alertPopup.then(function(res) {
                    $state.go('page.balance-history');
                });
            });

            /*
            var alertPopup = $ionicPopup.alert({
                title: 'Congratulations',
                template: 'Payment were sent'
            });

            alertPopup.then(function(res) {
                $state.go('page.balance-history');
            });
            */

        }
    }
})();
