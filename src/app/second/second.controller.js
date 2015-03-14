'use strict';

angular.module('angularDemo')

  .controller('SecondCtrl', function ($scope, shared, ave) {
    var second = this;
  
    second.greeting = "second"; 
    second.shared = shared;
    $scope.ave = ave;
    $scope.order = 'name';
  })
;
