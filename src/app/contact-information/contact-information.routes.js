(function() {
    'use strict';

    angular
    .module('app.contact-information')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab-view.contact-information', {
            url: '/contact-information',
            views: {
                'menuContent': {
                    templateUrl: 'app/contact-information/contact-information.html',
                    controller: 'ContactInformationController as vm'
                }
            }
        });
    }
})();
