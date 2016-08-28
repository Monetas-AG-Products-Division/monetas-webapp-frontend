(function() {
    'use strict';

    angular
    .module('app')
    .run(runBlock);

    runBlock.$inject = ['$ionicPlatform', 'PUSH_CONFIG', '$window', '$ionicPopup'];

    function runBlock($ionicPlatform, PUSH_CONFIG, $window, $ionicPopup) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar
            // above the keyboard for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            var push = PushNotification.init({
                android: {
                    senderID: PUSH_CONFIG.android.senderID
                },
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true"
                }
            });

            push.on('registration', function(data) {
                console.log(data);
                $window.sessionStorage.deviceId = data.registrationId;
            });

            push.on('notification', function(data) {
                console.log(data);
                var title = data.title;
                var template = data.message
                ;
                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: template
                });

                alertPopup.then(function(res) {
                    // action
                });
                // data.message,
                // data.title,
                // data.count,
                // data.sound,
                // data.image,
                // data.additionalData
            });

            push.on('error', function(e) {
                console.log(e);
                // e.message
            });

        });
    }
})();
