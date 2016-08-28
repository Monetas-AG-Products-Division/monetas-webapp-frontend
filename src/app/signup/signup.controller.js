(function() {
    'use strict';

    angular
    .module('app.signup')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['$state', '$http', '$window', '$cordovaOauth', 'BACKEND_CONFIG', 'OAUTH_CONFIG'];

    /* @ngInject */
    function SignupController($state, $http, $window, $cordovaOauth, BACKEND_CONFIG, OAUTH_CONFIG) {
        var vm = this;
        vm.user = {};
        vm.doSignUp = doSignUp;
        vm.facebookSignUp = facebookSignUp;
        vm.googleSignUp = googleSignUp;
        if (window.cordova) {
          vm.isDevice = true;
        };

        var additionalParams = {};

        activate();

        ////////////////
        function facebookSignUp() {
            $cordovaOauth.facebook(OAUTH_CONFIG.facebook.appId, ['email']).then(function(result) {
                console.log(result);
                $http.get(OAUTH_CONFIG.facebook.profileUrl, { params: { access_token: result.access_token, fields: 'id,name,email', format: 'json' }})
                .then(function(user) {
                    console.log(user);
                    vm.user = {
                        username: user.data.email,
                        password: user.data.id,
                        from: 'facebook'
                    };
                    additionalParams.name = user.data.name;
                    doSignUp();
                }, function(error) {
                    alert('There was a problem getting your profile.  Check the logs for details.');
                    console.log(error);
                });
            }, function(error) {
                console.log(error);
                // error
            });
        }

        function googleSignUp() {
            $cordovaOauth.google(OAUTH_CONFIG.google.clientId, ['email'])
            .then(function(result) {
                console.log(result);
                $http.get(OAUTH_CONFIG.google.profileUrl, { params: { access_token: result.access_token } })
                .then(function(user) {
                    console.log(user);
                    vm.user = {
                        username: user.emails[0].value,
                        password: user.id,
                        from: 'google'
                    };
                    additionalParams.name = user.name.givenName + ' ' + user.name.familyName;
                    doSignUp();
                }, function(error) {
                    console.log(error);
                });                
            }, function(error) {
                console.log(error);
            });
        }

        function doSignUp() {
            vm.user.deviceId = $window.sessionStorage.deviceId;

            $http
            .post(BACKEND_CONFIG.url + '/auth/signup', vm.user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $window.sessionStorage.profile = JSON.stringify(data.profile);
                $state.go('settings', {settings: {name: additionalParams.name}});
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
