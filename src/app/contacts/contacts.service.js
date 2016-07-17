(function() {
    'use strict';

    angular
    .module('app.contacts')
    .factory('ContactService', contactService);

    contactService.$inject = ['$http','BACKEND_CONFIG'];

    /* @ngInject */
    function contactService($http, BACKEND_CONFIG) {
        var service = {
            getAll: getAll,
            remove: remove,
            add: add
        };
        return service;

        ////////////////

        function getAll(cb) {
            $http.get(BACKEND_CONFIG.url + '/api/contacts')
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

        function add(data, cb) {
            $http.post(BACKEND_CONFIG.url + '/api/contacts', data)
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

        function remove(item, cb) {
            $http.delete(BACKEND_CONFIG.url + '/api/contacts/'+item._id)
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

    }
})();
