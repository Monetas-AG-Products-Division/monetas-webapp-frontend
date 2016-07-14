(function() {
    'use strict';

    angular
    .module('app.balance-history')
    .factory('BalanceHistoryService', balanceHistoryService);

    balanceHistoryService.$inject = [];

    // Some fake testing data
    var history = [
        {
            id: 0,
            createdAt: '14 July 2016',
            currency: 'USD',
            amount: 123.2,
            status: 'pending',
            contact: {
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
        }, {
            id: 2,
            createdAt: '24 July 2016',
            currency: 'USD',
            amount: 56,
            status: 'pending',
            contact: {
              name: 'Ben Sparrow'
            }
        }, {
            id: 3,
            createdAt: '4 July 2016',
            currency: 'USD',
            amount: 29,
            status: 'pending',
            contact: {
              name: 'Perry Governor'
            }
        }, {
            id: 4,
            createdAt: '1 July 2016',
            currency: 'USD',
            amount: 70,
            status: 'completed',
            contact: {
              name: 'Max Lynx'
            }
        }
    ];

    /* @ngInject */
    function balanceHistoryService() {
        var service = {
            all: all,
            remove: remove,
            add: add
        };
        return service;

        ////////////////

        function all() {
            // Might use a resource here that returns a JSON array
            return history;
        }

        function add(data) {
            var _id = 0;
            if (history.length > 0) {
                _id = history[history.length - 1].id + 1;
            };

            data.id = _id;
            history.push(data);
        }

        function remove(item) {
            var idx = history.map(function(e) { return e.id; }).indexOf(item.id);
            if (idx != -1) {
                history.splice(idx, 1);
            };
        }

    }
})();
