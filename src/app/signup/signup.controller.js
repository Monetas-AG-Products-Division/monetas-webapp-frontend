(function() {
    'use strict';

    angular
    .module('app.signup')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['$state', '$http', '$window', 'BACKEND_CONFIG'];

    /* @ngInject */
    function SignupController($state, $http, $window, BACKEND_CONFIG) {
        var vm = this;
        vm.user = {};
        vm.doSignUp = doSignUp;

        activate();

        ////////////////
        function doSignUp() {
            $http
            .post(BACKEND_CONFIG.url + '/auth/signup', vm.user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $state.go('settings');
            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;

                // Handle login errors here
                vm.message = 'Error: Invalid username or password';
            });
        }

        function activate() {
        }
    }
})();
