(function() {
    'use strict';

    angular
    .module('app.scan')
    .controller('ScanController', ScanController);

    ScanController.$inject = ['$state', 'ContactsService', '$cordovaBarcodeScanner'];

    /* @ngInject */
    function ScanController($state, ContactsService, $cordovaBarcodeScanner) {
        var vm = this;
        vm.payment = {};
        activate();
        scanBarcode();
        ////////////////
        function activate() {
        }

        function scanBarcode() {
            if (!window.cordova) return false;

            $cordovaBarcodeScanner.scan().then(function(imageData) {
                parseBill(imageData.text);
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                console.log("An error happened -> " + error);
            });
        };

        function parseBill(req) {
            /* 
              goatd://pay?req=base64(jsonObject)
              jsonObject = {
                  amount: 120,
                  unit: ...,
                  descr: ...,
                  contact: ...
              }
            */
            console.log(req);
            console.log(atob(parseUrlQueryParams(req).req));
            vm.payment = JSON.parse(atob(parseUrlQueryParams(req).req));
            console.log(vm.payment)
        }

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
