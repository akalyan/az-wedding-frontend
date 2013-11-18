'use strict';

angular.module('azWeddingFrontendApp')
  .controller('MainCtrl', function ($scope, $log, $location, CubeServer) {
    $log.log($location.protocol());
    $log.log($location.host());
    $log.log($location.port());
    $log.log($location.path());
    $log.log($location.hash());
    $log.log((new Date()).toISOString());

    CubeServer.send({
      'type'    : 'app_load',
      'time'    : (new Date()).toISOString(),
      'data'    : {
        'protocol': $location.protocol(),
        'host'    : $location.host(),
        'port'    : $location.port(),
        'path'    : $location.path(),
        'hash'    : $location.hash()
      }
    });

  });
