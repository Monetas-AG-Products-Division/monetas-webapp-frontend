(function() {
    'use strict';

    angular
    .module('app.contacts')
    .controller('ContactAddController', ContactAddController);

    ContactAddController.$inject = ['$state', '$cordovaBarcodeScanner', 'ContactsService', '$ionicPopup'];

    /* @ngInject */
    function ContactAddController($state, $cordovaBarcodeScanner, ContactsService, $ionicPopup) {
        var vm = this;

        activate();
        scanBarcode();
        ////////////////
        function activate() {
        }

        function scanBarcode() {
            if (!window.cordova) return false;

            $cordovaBarcodeScanner.scan().then(function(imageData) {
                parseContact(imageData.text);
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                console.log("An error happened -> " + error);
            });
        };

        function parseContact(req) {
            /* 
              goatd://contact?req=base64(_id)
            */
            console.log(req);
            console.log(atob(parseUrlQueryParams(req).req));
            vm.contact_id = atob(parseUrlQueryParams(req).req);
            addContact(vm.contact_id);
        }

        function addContact() {
            console.log(vm.contact_id);
            ContactsService.add({user:vm.contact_id}, function(contact) {
                console.log(contact);
                var alertPopup = $ionicPopup.alert({
                    title: 'Congratulations',
                    template: 'New contact was added'
                });

                alertPopup.then(function(res) {
                    $state.go('page.contacts');
                });
            });             
        };

        function parseUrlQueryParams(uri) {
            if (!uri) return false;

            var params = {};
            new URL(uri)
            .search
            .replace(/^.*\?/, '')
            .split('&').forEach(function(item) {
                var n = item.split('='); 
                params[n[0]] = n[1];
            });

            return params;
        }
    }
})();
