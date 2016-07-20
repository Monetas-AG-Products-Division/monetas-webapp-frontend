(function() {
    'use strict';

    angular
    .module('app.contact-information')
    .controller('ContactInformationController', ContactInformationController);

    ContactInformationController.$inject = ['$state'];

    /* @ngInject */
    function ContactInformationController($state) {
        var vm = this;
        vm.qrcodeString = 'my-address-demo';
        
        activate();

        ////////////////

        function activate() {
        }

    }
})();
