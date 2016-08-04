(function() {
    'use strict';

    angular
    .module('app.scan')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('page.scan', {
            url: '/scan',
            views: {
                'content': {
                    templateUrl: 'app/scan/scan.html',
                    controller: 'ScanController as vm'
                }
            }
        });
    }
})();
