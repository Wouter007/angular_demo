'use strict';

angular
  .module('angularDemo')
  .controller('MainCtrl', MainCtrl)
  .filter('reverse', function() {
  return function(text) {
    return text.split("").reverse("").join("") + text; 
  }
});

//Andere manier om controller aan te halen, minder indentation
function MainCtrl ($scope, shared) {
  var main = this;

  main.greeting = "first";
  main.shared = shared;
  $scope.reversed = function(msg) {
    return msg.split("").reverse("").join("");
  }
}

