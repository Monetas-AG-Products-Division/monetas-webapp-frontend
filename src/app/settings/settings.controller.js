(function() {
    'use strict';

    angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$stateParams', '$state', '$http', '$window', 'BACKEND_CONFIG'];

    /* @ngInject */
    function SettingsController($stateParams, $state, $http, $window, BACKEND_CONFIG) {
        var vm = this;
        vm.settings = $stateParams.settings || {};
        console.log(vm.settings);
        vm.doPin = doPin;
        vm.doSetSettings = doSetSettings;

        activate();

        ////////////////
        function doPin() {
          console.log(vm.settings);
          $state.go('change_pin', {settings: vm.settings});
        }

        function doSetSettings() {
            $http
            .put(BACKEND_CONFIG.url + '/api/users', {info: vm.settings })
            .success(function (data, status, headers, config) {
                $state.go('tab.balance');
            })
            .error(function (data, status, headers, config) {
                // Handle login errors here
                alert('Something happend wrong :(');
            });
        };

        function activate() {
        }
    }
})();
