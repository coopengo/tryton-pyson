var _ = require('underscore');
var pyson = require('..');
require('should');
var data = require('./.data');

function resolve(p, c) {
  return pyson(JSON.stringify(p))
    .resolve(c);
}

function make(ts) {
  _.each(ts, (t) => {
    if (t.r === Error) {
      var crash = false;
      try {
        resolve(t.p, t.c);
      }
      catch (e) {
        crash = true;
      }
      finally {
        crash.should.equal(true);
      }
    }
    else {
      resolve(t.p, t.c)
        .should.equal(t.r);
    }
  });
}
describe('Pyson', function () {
  _.each(data, (v, k) => {
    it('checks ' + k, () => make(v));
  });
});
