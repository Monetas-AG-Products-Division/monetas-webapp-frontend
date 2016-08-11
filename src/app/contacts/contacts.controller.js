(function() {
    'use strict';

    angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactsService'];

    /* @ngInject */
    function ContactsController(ContactsService) {
        var vm = this;
        vm.contacts = [];
        vm.remove = remove;

        activate();

        ////////////////


        function activate() {
            ContactsService.getAll(function(data) {
                vm.contacts = [];

                /* generate abbrs for contact names */
                data.result.forEach(function(item, key) {
                  vm.contacts.push({
                    name: item.user.info.name,
                    abbr: item.user.info.name.match(/\b\w/g).join('')
                  });
                });
            });
        }

        function remove(contact) {
            ContactsService.remove(contact);
        }
    }
})();
