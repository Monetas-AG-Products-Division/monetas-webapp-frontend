(function() {
    'use strict';

    angular
    .module('app.charge')
    .controller('RenderQRBillController', RenderQRBillController);

    RenderQRBillController.$inject = ['$state', '$stateParams', '$window', 'TransferService'];

    /* @ngInject */
    function RenderQRBillController($state, $stateParams, $window, TransferService) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.payment = $stateParams.payment;
        vm.payment.sender = profile._id;
        vm.payment.fee = 0;

        activate();

        ////////////////
        function activate() {
          doRenderQR(vm.payment);
        }

        function doRenderQR(data) {
            /* 
              goatd://pay?req=base64(_id)
            */
            console.log(data);
            TransferService.add(data, function(result) {
              vm.qrcodeString = 'goatd://pay?req=' + btoa(result._id);
              console.log(btoa(result._id));                
            });

        }
    }
})();
