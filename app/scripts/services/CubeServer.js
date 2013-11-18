'use strict';

angular.module('azWeddingFrontendApp')
  .factory('CubeServer', function ($log, $http) {

    // Public API here
    return {
      send: function (tsd) {
        $http
          .post('/cube/1.0/event/put', JSON.stringify([tsd]))
          .success(function(data, status, headers, config) {
            $log.log('Successfully sent cube data');
          })
          .error(function(data, status, headers, config) {
            $log.log('Failed cube request');
            $log.log(data);
            $log.log(status);
          });
      }
    };

  });
