(function() {
    'use strict';

    angular
    .module('app.signup')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['$state'];

    /* @ngInject */
    function SignupController($state) {
        var vm = this;
        vm.doSignUp = doSignUp;

        activate();

        ////////////////
        function doSignUp() {
            $state.go('settings');
        };

        function activate() {
        }
    }
})();
