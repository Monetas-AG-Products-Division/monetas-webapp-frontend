(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'app.core',

        /* Feature areas */
        'app.dash',
        'app.signup',
        'app.login',
        'app.account',
        'app.settings',
        'app.balance'
    ]);
})();
