'use strict';

function composeEmail () {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    controllerAs: 'compose',
    controller: function () {

    },
    link: function ($scope, $element, $attrs) {

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

angular.module('angularDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      })
     $stateProvider.state('second', {
        url: '/second',
        templateUrl: 'app/second/second.html',
        controller: 'SecondCtrl as second'
      })

    $urlRouterProvider.otherwise('/');
  })

  .service('shared', function Shared(){
  	var shared = this;

  	shared.message = "Gedeelde variabele";
  })

  .service('ave', function(){
    var ave = {};
    ave.cast = [
      {
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man"
      },
      {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America"
      },
      {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk"
      },
      {
        name: "Chris Hemsworth",
        character: "Thor"
      },
      {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow"
      },
      {
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye"
      },
      {
        name: "Tom Hiddleston",
        character: "Loki"
      },
      {
        name: "Clark Gregg",
        character: "Agent Phil Coulson"
      },
      {
        name: "Cobie Smulders",
        character: "Agent Maria Hill"
      },
      {
        name: "Stellan Skarsgard",
        character: "Selvig"
      },
      {
        name: "Samuel L. Jackson",
        character: "Nick Fury"
      },
      {
        name: "Gwyneth Paltrow",
        character: "Pepper Potts"
      },
      {
        name: "Paul Bettany",
        character: "Jarvis (voice)"
      },
      {
        name: "Alexis Denisof",
        character: "The Other"
      },
      {
        name: "Tina Benko",
        character: "NASA Scientist"
      }
    ]
    return ave;
  })
;