(function() {
    'use strict';

    angular
    .module('app.contact-information')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('contact-information', {
            url: '/contact-information',
            templateUrl: 'app/contact-information/contact-information.html',
            controller: 'ContactInformationController as vm'
        });
    }
})();
