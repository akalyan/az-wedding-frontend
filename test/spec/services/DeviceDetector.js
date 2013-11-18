'use strict';

describe('Service: DeviceDetector', function () {

  // load the service's module
  beforeEach(module('azWeddingFrontendApp'));

  // instantiate service
  var DeviceDetector;
  beforeEach(inject(function (_DeviceDetector_) {
    DeviceDetector = _DeviceDetector_;
  }));

  it('should do something', function () {
    expect(!!DeviceDetector).toBe(true);
  });

});
