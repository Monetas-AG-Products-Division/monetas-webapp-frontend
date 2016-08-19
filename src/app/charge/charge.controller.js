(function() {
    'use strict';

    angular
    .module('app.charge')
    .controller('ChargeController', ChargeController);

    ChargeController.$inject = ['$state','$window','TransferService'];

    /* @ngInject */
    function ChargeController($state, $window, TransferService) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.payment = {};
        vm.units = profile.units;
        vm.getCurrencyName = getCurrencyName;
        vm.showFees = showFees;

        activate();

        ////////////////
        function activate() {
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
