(function() {
    'use strict';

    angular
    .module('app.charge')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('page.charge', {
            url: '/charge',
            views: {
                'content': {
                    templateUrl: 'app/charge/charge.html',
                    controller: 'ChargeController as vm'
                }
            }
        })

        .state('page.render-qr-bill', {
            url: '/render-qr-bill',
            params: {
              payment: null
            },
            views: {
                'content': {
                    templateUrl: 'app/charge/render_qr_bill.html',
                    controller: 'RenderQRBillController as vm'
                }
            }
        });

    }
})();
