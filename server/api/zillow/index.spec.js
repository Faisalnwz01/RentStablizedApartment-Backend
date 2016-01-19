'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var zillowCtrlStub = {
  index: 'zillowCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var zillowIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './zillow.controller': zillowCtrlStub
});

describe('Zillow API Router:', function() {

  it('should return an express router instance', function() {
    zillowIndex.should.equal(routerStub);
  });

  describe('GET /api/zillows', function() {

    it('should route to zillow.controller.index', function() {
      routerStub.get
        .withArgs('/', 'zillowCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
