(function() {
    'use strict';

    angular
    .module('app.contacts')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('page.contacts', {
            url: '/contacts',
            views: {
                'content': {
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'ContactsController as vm'
                }
            }
        })

        .state('page.contact-details', {
            url: '/contact-details',
            params: {
              contact: null
            },
            views: {
                'content': {
                    templateUrl: 'app/contacts/contact-details.html',
                    controller: 'ContactDetailsController as vm'
                }
            }
        })

        .state('page.contact-add', {
            url: '/contact-add',
            params: {
              contact: null
            },
            views: {
                'content': {
                    templateUrl: 'app/contacts/contact-add.html',
                    controller: 'ContactAddController as vm'
                }
            }
        });
    }
})();
