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
        vm.getCurrencyName = getCurrencyName;
        vm.showFees = showFees;
        vm.payment = {};
        
        ContactsService.getAll(function(data) {
          vm.contacts = data.result || [];
        });

        activate();

        ////////////////
        function activate() {
        }

        function doSend() {
            console.log('send money');

            var data = {
                amount: vm.payment.amount, 
                fee: vm.payment.fee || 0,
                message: vm.payment.message || '',
                recipient: vm.payment.contact.user._id,
                unit: vm.payment.unit
            };

            TransferService.send(data, function(result) {
                console.log(result);
                var title = 'Congratulations';
                var template = 'Payment were sent';
                if (result.error) {
                  title = 'Error';
                  template = '<span class="assertive">'+result.error+'</span>';
                };
                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: template
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

        function getCurrencyName(id) {
          var idx = vm.units.map(function(e) { return e.id; }).indexOf(id);
          if (idx !== -1) {
            if (vm.units[idx].code) {
              return vm.units[idx].code.name;
            } else {
              return vm.units[idx].name;
            };
          } else {
            return '';
          };
        }

        function showFees() {
          if (!vm.payment.amount || !vm.payment.unit) return false;

          TransferService.getFees({amount: vm.payment.amount, unit: vm.payment.unit}, function(result) {
            vm.payment.fee = result.result;
            console.log(result);                
          });
        }
    }
})();
