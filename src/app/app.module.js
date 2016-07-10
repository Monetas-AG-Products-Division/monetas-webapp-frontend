(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'ja.qr',
        'ionic-letter-avatar',
        'app.core',

        /* Feature areas */
        'app.dash',
        'app.signup',
        'app.login',
        'app.settings',
        'app.balance',
        'app.contact-information',
        'app.contacts'
    ]);
})();
