(function() {
    'use strict';

    angular
    .module('app.contacts')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('contacts', {
            url: '/contacts',
            templateUrl: 'app/contacts/contacts.html',
            controller: 'ContactsController as vm'
        })

        .state('contact-details', {
            url: '/contact-details',
            params: {
              contact: null
            },
            templateUrl: 'app/contacts/contact-details.html',
            controller: 'ContactDetailsController as vm'
        });

    }
})();
