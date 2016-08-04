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
        vm.payment.contact = {
            name: profile.info.name,
            nym_id: profile.nym_id
        };

        activate();

        ////////////////
        function activate() {
          doRenderQR(vm.payment);
        }

        function doRenderQR(data) {
            /* 
              goatd://pay?req=base64(jsonObject)
              jsonObject = {
                  amount: 120,
                  fee: 1.2,
                  unit: ...,
                  descr: ...,
                  contact: ...
              }
            */
            vm.qrcodeString = 'goatd://pay?req=' + btoa(JSON.stringify(data));
            console.log(btoa(JSON.stringify(data)));
        }
    }
})();
