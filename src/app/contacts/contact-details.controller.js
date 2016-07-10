(function() {
    'use strict';

    angular
    .module('app.contacts')
    .controller('ContactDetailsController', ContactDetailsController);

    ContactDetailsController.$inject = ['$stateParams', 'ContactsService', '$state'];

    /* @ngInject */
    function ContactDetailsController($stateParams, ContactsService, $state) {
        var vm = this;
        vm.doSave = doSave;
        console.log($stateParams.contactId);
        if ($stateParams.contactId == 'new') {
            vm.contact = { name: '' };
        } else {
            vm.contact = ContactsService.get($stateParams.contactId);
        }

        activate();

        ////////////////

        function activate() {
        }

        function doSave() {
          if (vm.contact.id >= 0) {
              ContactsService.edit(vm.contact);
          } else {
              ContactsService.add(vm.contact.name);
          };

          $state.go('tab-view.contacts');
        }
    }
})();
