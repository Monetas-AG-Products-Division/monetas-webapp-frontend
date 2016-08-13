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
        url: 'http://52.28.99.96' //'http://localhost:3000'//'http://52.28.99.96' //
    });

    configure.$inject = ['$httpProvider','$ionicConfigProvider'];

    function configure ($httpProvider,$ionicConfigProvider) {
        // Add your configuration here
        $httpProvider.interceptors.push('authInterceptor');
        $ionicConfigProvider.tabs.position('bottom');
    }

})();
