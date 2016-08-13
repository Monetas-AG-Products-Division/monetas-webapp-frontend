(function() {
    'use strict';

    angular
    .module('app.contact-information')
    .controller('ContactInformationController', ContactInformationController);

    ContactInformationController.$inject = ['$state', '$window'];

    /* @ngInject */
    function ContactInformationController($state, $window) {
        var profile = JSON.parse($window.sessionStorage.profile);
        var vm = this;
        vm.sender = profile._id;
        
        activate();

        ////////////////

        function activate() {
          doRenderQR(vm.sender);
        }

        function doRenderQR(data) {
            /* 
              goatd://contact?req=base64(_id)
            */
            vm.qrcodeString = 'goatd://contact?req=' + btoa(data);
        }

    }
})();
