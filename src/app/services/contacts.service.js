(function() {
    'use strict';

    angular
    .module('app')
    .factory('ContactsService', contactsService);

    contactsService.$inject = ['$http','BACKEND_CONFIG'];

    /* @ngInject */
    function contactsService($http, BACKEND_CONFIG) {
        var service = {
            getAll: getAll,
            remove: remove,
            add: add
        };

        var contacts = {
          result: [
            {
              id: 1,
              name: 'John'
            },
            {
              id: 2,
              name: 'Mike'
            },
            {
              id: 2,
              name: 'Nick'
            }
          ]
        }
        return service;

        ////////////////

        function getAll(cb) {
          /*
            $http.get(BACKEND_CONFIG.url + '/api/contacts')
            .success(function (data, status, headers, config) {
                cb(data);
            });
          */
          cb(contacts);
        }

        function add(data, cb) {
          contacts.result.push(data);
          /*
            $http.post(BACKEND_CONFIG.url + '/api/contacts', data)
            .success(function (data, status, headers, config) {
                cb(data);
            });
          */
        }

        function remove(item, cb) {
          console.log(item);
          /*
            $http.delete(BACKEND_CONFIG.url + '/api/contacts/'+item._id)
            .success(function (data, status, headers, config) {
                cb(data);
            });
          */
        }

    }
})();
