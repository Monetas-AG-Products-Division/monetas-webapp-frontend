(function() {
    'use strict';

    angular
    .module('app.dash')
    .controller('DashController', DashController);

    DashController.$inject = [];

    /* @ngInject */
    function DashController() {
        console.log('Dashboard');
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();
