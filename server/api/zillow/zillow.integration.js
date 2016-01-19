'use strict';

var app = require('../..');
import request from 'supertest';

describe('Zillow API:', function() {

  describe('GET /api/zillows', function() {
    var zillows;

    beforeEach(function(done) {
      request(app)
        .get('/api/zillows')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          zillows = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      zillows.should.be.instanceOf(Array);
    });

  });

});
