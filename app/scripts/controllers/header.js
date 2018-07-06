'use strict';

/**
 * @ngdoc function
 * @name yuewenApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yuewenApp
 */
angular.module('yuewenApp')
  .controller('HeaderCtrl', function ($scope, $modal) {
    $scope.openLoginDialog = function(){
        var modalInstance = $modal.open({
            templateUrl : 'templates/login.html',
            controller : 'LoginCtrl',
            resolve : {
                data : function() {
                     return null;
                }
            }
        });
    };
  });

