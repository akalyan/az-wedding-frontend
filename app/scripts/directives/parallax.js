'use strict';

angular.module('azWeddingFrontendApp')
  .directive('parallax', function (DeviceDetector) {
    return {
      template: '<div ng-transclude></div>',
      restrict: 'A',
      transclude: true,
      scope: { },
      link: function postLink(scope, element) {
        if (DeviceDetector.isAny()) {
          // don't enable parallax on the element if it's a mobile device
        } else {
          jQuery(element).parallax('50%', 0.5);
        }
      }
    };
  });
