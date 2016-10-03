(function() {
    'use strict';


    angular
    .module('app')
    .factory('authInterceptor', function ($rootScope, $q, $window, $injector) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    delete $window.sessionStorage.token;
                    $injector.get('$state').go('login');
                    // handle the case where the user is not authenticated
                    return $q.reject(response);
                }
                return response || $q.when(response);
            }
        };
    });

    angular
    .module('app')
    .config(configure)
    .constant('BACKEND_CONFIG', {
        url: 'http://api.monetas.net' //'http://localhost:3000'//'http://52.28.99.96' //
    })
    .constant('OAUTH_CONFIG', {
        google: {
            clientId: '247686357136-26vul8asqdoc9jtq97238cgv8kcs8m3b.apps.googleusercontent.com',
            profileUrl: 'https://www.googleapis.com/plus/v1/people/me'
        },
        facebook: {
            appId: '588529297993055',
            profileUrl: 'https://graph.facebook.com/v2.2/me'
        }
    })
    .constant('PUSH_CONFIG', {
        android: {
            senderID: '54890179088'
        }
    });

    configure.$inject = ['$httpProvider','$ionicConfigProvider'];

    function configure ($httpProvider,$ionicConfigProvider, FacebookProvider, OAUTH_CONFIG) {
        // Add your configuration here
        $httpProvider.interceptors.push('authInterceptor');
        $ionicConfigProvider.tabs.position('bottom');
    }

})();
