(function() {
    'use strict';

    angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$stateParams', '$state', 'ProfileService', '$window', 'BACKEND_CONFIG'];

    /* @ngInject */
    function SettingsController($stateParams, $state, ProfileService, $window, BACKEND_CONFIG) {
        var vm = this;
        vm.units = JSON.parse($window.sessionStorage.profile).units;
        vm.settings = $stateParams.settings || {};
        vm.doPin = doPin;
        vm.doSetSettings = doSetSettings;

        activate();

        ////////////////
        function doPin() {
            console.log(vm.settings);
            $state.go('change_pin', {settings: vm.settings});
        }

        function doSetSettings() {
            ProfileService.edit({info: vm.settings }, function(data) {
                $window.sessionStorage.token = data.token;
                $window.sessionStorage.profile = JSON.stringify(data.profile);
                $state.go('tab.balance');
            });
        }

        function activate() {
        }
    }
})();
