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
                vm.contacts = data.result || [];

                /* generate abbrs for contact names */
                vm.contacts.forEach(function(item, key) {
                  console.log(vm.contacts[key]);
                  vm.contacts[key].abbr = item.name.match(/\b\w/g).join('');
                });
            });
        }

        function remove(contact) {
            ContactsService.remove(contact);
        }
    }
})();
