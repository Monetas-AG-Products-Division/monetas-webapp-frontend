(function() {
    'use strict';

    angular
    .module('app.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$http', '$window', '$cordovaOauth', 'Facebook', 'BACKEND_CONFIG', 'OAUTH_CONFIG'];

    /* @ngInject */
    function LoginController($state, $http, $window, $cordovaOauth, Facebook, BACKEND_CONFIG, OAUTH_CONFIG) {
        var vm = this;
        vm.user = {};
        vm.doLogIn = doLogIn;
        vm.facebookLogin = facebookLogin;
        vm.googleLogin = googleLogin;

        if (window.cordova) {
          vm.isDevice = true;
        };
        activate();

        ////////////////
        function facebookLogin() {
            if (!vm.isDevice) {
                facebookDesktopLogin();
                return;
            };

            $cordovaOauth.facebook(OAUTH_CONFIG.facebook.appId, ['email']).then(function(result) {
                console.log(result);
                $http.get(OAUTH_CONFIG.facebook.profileUrl, { params: { access_token: result.access_token, fields: 'id,name,email', format: 'json' }})
                .then(function(user) {
                    console.log(user);
                    vm.user = {
                        username: user.data.email,
                        password: user.data.id,
                        access_token: result.access_token,
                        from: 'facebook'
                    };
                    doLogIn();
                }, function(error) {
                    alert('There was a problem getting your profile.  Check the logs for details.');
                    console.log(error);
                });
            }, function(error) {
                console.log(error);
                // error
            });
        }

        function facebookDesktopLogin() {
            Facebook.login(function(response) {
                console.log(response);
                // Do something with response.
            });
        }

        function googleLogin() {
            $cordovaOauth.google(OAUTH_CONFIG.google.clientId, ['email'])
            .then(function(result) {
                console.log(result);
                $http.get(OAUTH_CONFIG.google.profileUrl, { params: { access_token: result.access_token } })
                .then(function(user) {
                    console.log(user);
                    vm.user = {
                        username: user.emails[0].value,
                        password: user.id,
                        access_token: result.access_token,
                        from: 'google'
                    };
                    doLogIn();
                }, function(error) {
                    console.log(error);
                });                
            }, function(error) {
                console.log(error);
            });
        }


        function doLogIn() {
            vm.user.deviceId = $window.sessionStorage.deviceId;
            
            $http
            .post(BACKEND_CONFIG.url + '/auth/login', vm.user)
            .success(function (data, status, headers, config) {
              $window.sessionStorage.token = data.token;
              $window.sessionStorage.profile = JSON.stringify(data.profile);
              $state.go('tab.balance');
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
