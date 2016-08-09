(function() {
    'use strict';

    angular
    .module('app.charge')
    .controller('RenderQRBillController', RenderQRBillController);

    RenderQRBillController.$inject = ['$state', '$stateParams', '$window'];

    /* @ngInject */
    function RenderQRBillController($state, $stateParams, $window) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.payment = $stateParams.payment;

        activate();

        ////////////////
        function activate() {
          doRenderQR(vm.payment);
        }

        function doRenderQR(data) {
            /* 
              goatd://pay?req=base64(_id)
            */
            TransferService.add(data, function(result) {
              console.log(result);
              vm.qrcodeString = 'goatd://pay?req=' + btoa(result._id);
            });
        }
    }
})();
