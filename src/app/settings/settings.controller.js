(function() {
    'use strict';

    angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$state'];

    /* @ngInject */
    function SettingsController($state) {
        var vm = this;
        vm.doSetPin = doSetPin;
        vm.doBalance = doBalance;

        activate();

        ////////////////
        function doSetPin() {
            $state.go('change_pin');
        };

        function doBalance() {
            console.log(123)
            $state.go('tab-view.balance');
        };

        function activate() {
        }
    }
})();
