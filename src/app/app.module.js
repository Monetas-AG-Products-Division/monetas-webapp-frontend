(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'ngCordova',
        'ngCordovaOauth',
        'ja.qr',
        'ionic-letter-avatar',
        'ionic-modal-select',
        'ionic-toast',
        'app.core',

        /* Feature areas */
        'app.dash',
        'app.signup',
        'app.login',
        'app.settings',
        'app.balance',
        'app.balance-history',
        'app.contact-information',
        'app.contacts',
        'app.send',
        'app.scan',
        'app.charge'
    ]);
})();
