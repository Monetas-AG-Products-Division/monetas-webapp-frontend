(function() {
    'use strict';

    angular
    .module('app.settings')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('settings', {
            url: '/settings',
            params: {
              settings: null
            },
            templateUrl: 'app/settings/settings.html',
            controller: 'SettingsController as vm'
        })

        .state('change_pin', {
            url: '/change_pin',
            params: {
              settings: null
            },
            templateUrl: 'app/settings/change_pin.html',
            controller: 'SettingsController as vm'
        });

    }
})();
