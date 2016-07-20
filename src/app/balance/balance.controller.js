(function() {
    'use strict';

    angular
    .module('app.balance')
    .controller('BalanceController', BalanceController);

    BalanceController.$inject = ['$state', '$ionicTabsDelegate', 'ProfileService'];

    /* @ngInject */
    function BalanceController($state, $ionicTabsDelegate, ProfileService) {
        var vm = this;
        
        /*
          will be replaced by model factory in next release
        */
        ProfileService.getBalance(function(data) {
            vm.balance = data.result;
        });

        activate();

        ////////////////
        function activate() {
        }
    }
})();
