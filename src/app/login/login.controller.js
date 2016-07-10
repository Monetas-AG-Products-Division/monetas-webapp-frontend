(function() {
    'use strict';

    angular
    .module('app.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.doLogIn = doLogIn;

        activate();

        ////////////////
        function doLogIn() {
            $state.go('tab-view.balance');
        };

        function activate() {
        };
    }
})();
