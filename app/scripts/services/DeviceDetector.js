'use strict';

angular.module('azWeddingFrontendApp')
  .factory('DeviceDetector', function () {

    // Public API here
    return {
      isAndroid: function () {
        return navigator.userAgent.match(/Android/i);
      },
      isBlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      isiOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      isOpera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      isWindows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      isAny: function () {
        return (
          this.isAndroid() ||
          this.isBlackBerry() ||
          this.isiOS() ||
          this.isOpera() ||
          this.isWindows()
        );
      }
    };
  });
