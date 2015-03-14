'use strict';

function MainCtrl ($scope, shared) {
  var main = this;

  main.greeting = "first";
  main.shared = shared;
  $scope.reversed = function(msg) {
    return msg.split("").reverse("").join("");
  }
}

function composeEmail () {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    controllerAs: 'compose',
    controller: function () {

    },
    link: function ($scope, $element, $attrs) {
      console.log('It works!');
    },
    template: [
      '<div class="compose-email">',
        '<input type="text" placeholder="To.." ng-model="compose.to">',
        '<input type="text" placeholder="Subject.." ng-model="compose.subject">',
        '<textarea placeholder="Message.." ng-model="compose.message"></textarea>',
      '</div>'
    ].join('')
  };
}

function enterElement () {
  // ipv een object zoals bij composeEmail, wordt hier
  // enkel link meteen doorgegeven als een functie
  // dit geeft dus een function terug ipv een object
  return function (scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.addClass(attrs.enter);
    })
  }
}
function leaveElement () {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function() {
      element.removeClass(attrs.enter);
    })
  }
}

angular
  .module('angularDemo')

  //driective: wordt automatisch omgezet naar compose-email
  .directive('composeEmail', composeEmail)
  .directive('enter', enterElement)
  .directive('leave', leaveElement)

  .controller('MainCtrl', MainCtrl)
  .controller('composeEmail', composeEmail)
  .filter('reverse', function() {
  return function(text) {
    return text.split("").reverse("").join("") + text; 
  }
});


