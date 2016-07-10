(function() {
    'use strict';

    angular
    .module('app.contacts')
    .factory('ContactsService', contactsService);

    contactsService.$inject = [];

    // Some fake testing data
    var contacts = [
        {
            id: 0,
            name: 'Ben Sparrow'
        }, {
            id: 1,
            name: 'Max Lynx'
        }, {
            id: 2,
            name: 'Adam Bradleyson'
        }, {
            id: 3,
            name: 'Perry Governor'
        }, {
            id: 4,
            name: 'Mike Harrington'
        }
    ];

    /* @ngInject */
    function contactsService() {
        var service = {
            all: all,
            remove: remove,
            edit: edit,
            add: add,
            get: get
        };
        return service;

        ////////////////

        function all() {
            // Might use a resource here that returns a JSON array
            return contacts;
        }

        function add(name) {
            var _id = 0;
            if (contacts.length > 0) {
                _id = contacts[contacts.length - 1].id + 1;
            };

            contacts.push({ id: _id, name: name });
        }

        function remove(contact) {
            contacts.splice(contacts.indexOf(contact), 1);
        }

        function get(contactId) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id === parseInt(contactId)) {
                    return contacts[i];
                }
            }
            return null;
        }

        function edit(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id === parseInt(contact.id)) {
                    contacts[i].name = contact.name;
                }
            }
            return null;
        }

    }
})();
