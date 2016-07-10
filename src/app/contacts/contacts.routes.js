(function() {
    'use strict';

    angular
    .module('app.contacts')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab-view.contacts', {
            url: '/contacts',
            views: {
                'menuContent': {
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'ContactsController as vm'
                }
            }
        })

        .state('tab-view.contact-details', {
            url: '/contacts/:contactId',
            views: {
                'menuContent': {
                    templateUrl: 'app/contacts/contact-details.html',
                    controller: 'ContactDetailsController as vm'
                }
            }
        });

    }
})();
