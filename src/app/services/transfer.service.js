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
            getById: getById,
            remove: remove,
            send: send,
            request: request,
            complete: complete,
            getFees: getFees
        };
        return service;

        ////////////////

        function getAll(cb) {
            $http.get(BACKEND_CONFIG.url + '/api/transfers')
            .success(function (data, status, headers, config) {
                cb(data);
            });
        }

        function getById(id, cb) {
            $http({
                url: BACKEND_CONFIG.url + '/api/transfers/'+id, 
                method: "GET",
                withCredentials: true
            })
            .success(function (data, status, headers, config) {
                cb(data);
            })
            error(function(data, status, headers, config) { 
                console.log(data, status, headers);
                // called asynchronously if an error occurs // or server returns response with an error status. 
            });
        }

        function send(data, cb) {
            $http.post(BACKEND_CONFIG.url + '/api/transfers/outcome', data)
            .success(function (result, status, headers, config) {
                console.log(result);
                cb(result);
            });
        }

        function request(data, cb) {
            $http.post(BACKEND_CONFIG.url + '/api/transfers/income', data)
            .success(function (result, status, headers, config) {
                console.log(result);
                cb(result);
            });
        }

        function complete(id, cb) {
            $http.put(BACKEND_CONFIG.url + '/api/transfers/complete/'+id, {})
            .success(function (result, status, headers, config) {
                console.log(result);
                cb(result);
            });
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

        function getFees(data, cb) {
            $http.post(BACKEND_CONFIG.url + '/api/transfers/fees', data)
            .success(function (result, status, headers, config) {
                console.log(result);
                cb(result);
            });
        }

    }
})();
