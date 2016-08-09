(function() {
    'use strict';

    angular
    .module('app')
    .factory('TransferService', transferService);

    transferService.$inject = ['$http','BACKEND_CONFIG'];

    // Some fake testing data
    /*
    var history = [
        {
            id: 0,
            createdAt: '14 July 2016',
            currency: 'USD',
            amount: 123.2,
            status: 'pending',
            contact: {
              id: 0,
              name: 'Ben Sparrow'
            }
        }, {
            id: 1,
            createdAt: '15 July 2016',
            currency: 'USD',
            amount: 70,
            status: 'pending',
            contact: {
              name: 'Adam Brandleyson'
            }
        }
    ];
    */

    /* @ngInject */
    function transferService($http, BACKEND_CONFIG) {
        var service = {
            getAll: getAll,
            remove: remove,
            add: add
        };
        return service;

        ////////////////

        function getAll(cb) {
            $http.get(BACKEND_CONFIG.url + '/api/transfers')
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

        function add(data, cb) {
            $http.post(BACKEND_CONFIG.url + '/api/transfers', data)
            .success(function (data, status, headers, config) {
                cb(data);
            });

            /*
            var _id = 0;
            if (history.length > 0) {
                _id = history[history.length - 1].id + 1;
            };

            data.id = _id;
            data.createdAt = '17 July 2016';
            data.status = 'completed';
            history.push(data);
            */
        }

        function remove(item, cb) {
            $http.delete(BACKEND_CONFIG.url + '/api/transfers/'+item._id)
            .success(function (data, status, headers, config) {
                cb(data);
            });

            /*
            var idx = history.map(function(e) { return e.id; }).indexOf(item.id);
            if (idx != -1) {
                history.splice(idx, 1);
            };
            */
        }

    }
})();
