(function() {
    'use strict';

    angular
    .module('app.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$http', '$window', 'BACKEND_CONFIG'];

    /* @ngInject */
    function LoginController($state, $http, $window, BACKEND_CONFIG) {
        var vm = this;
        vm.user = {};
        vm.doLogIn = doLogIn;
        console.log(BACKEND_CONFIG);

        activate();

        ////////////////
        function doLogIn() {
            $http
            .post(BACKEND_CONFIG.url + '/auth/login', vm.user)
            .success(function (data, status, headers, config) {
              $window.sessionStorage.token = data.token;
              $state.go('tab-view.balance');
            })
            .error(function (data, status, headers, config) {
              // Erase the token if the user fails to log in
              delete $window.sessionStorage.token;

              // Handle login errors here
              vm.message = 'Error: Invalid user or password';
            });

        };

        function activate() {
        };
    }
})();
