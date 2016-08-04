(function() {
    'use strict';

    angular
    .module('app.charge')
    .controller('ChargeController', ChargeController);

    ChargeController.$inject = ['$state','$window'];

    /* @ngInject */
    function ChargeController($state, $window) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.payment = {};
        vm.units = profile.units;
        vm.getCurrencyName = getCurrencyName;

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

    }
})();
