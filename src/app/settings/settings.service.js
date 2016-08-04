(function() {
    'use strict';

    angular
    .module('app.settings')
    .factory('ProfileService', profileService);

    profileService.$inject = ['$http','BACKEND_CONFIG'];

    /* @ngInject */
    function profileService($http, BACKEND_CONFIG) {
        var service = {
            getBalance: getBalance,
            edit: edit
        };
        return service;

        ////////////////

        function getBalance(cb) {
            $http.get(BACKEND_CONFIG.url + '/api/users/balance ')
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

        function edit(data, cb) {
            $http.put(BACKEND_CONFIG.url + '/api/users', data)
            .success(function (data, status, headers, config) {
                console.log(data);
                cb(data);
            });
        }

        function getUnits() {
            /*
              $http.get(BACKEND_CONFIG.url + '/api/users/balance ')
              .success(function (data, status, headers, config) {
                  cb(data);
              });
            */
            var units = JSON.parse($window.sessionStorage.profile);
            return units;
        }

    }
})();
