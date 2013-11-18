'use strict';

describe('Service: CubeServer', function () {

  // load the service's module
  beforeEach(module('azWeddingFrontendApp'));

  // instantiate service
  var CubeServer;
  beforeEach(inject(function (_CubeServer_) {
    CubeServer = _CubeServer_;
  }));

  it('should do something', function () {
    expect(!!CubeServer).toBe(true);
  });

});
