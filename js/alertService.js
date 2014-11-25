'use strict';

/* services.js */

// AAK Alert Service

app.factory('alertService', function($rootScope, $timeout) {
    var alertService = {};
    

    // create an array of alerts available globally
    $rootScope.alerts = [];

    alertService.add = function(type, msg, timeout) {
     // $rootScope.alerts.push({'type': type, 'msg': msg});
     $rootScope.alerts.push({
            type: type,
            msg: msg,
            close: function() {
                return alertService.closeAlert(this);
            }
        });

        if (timeout) {
        console.log("Inside Timeout :" + timeout) ;
            $timeout(function(){ 
               // console.log("Inside Timeout Function :") ;
                alertService.closeAlert(this); 
            }, timeout); 
        }
    };

    alertService.closeAlert = function(index) {
     //   console.log("close index" + index);
      $rootScope.alerts.splice(index, 1);
    };

    return alertService;
  });