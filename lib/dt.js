var _ = require('underscore');
var Pyson = require('./pyson');
//
function DTMixin(desc, items, deltas) {
  var keys = [].concat(items, deltas);
  _.each(keys, (k) => {
    this[k] = null;
  });
  Pyson.call(this, desc);
  _.each(_.pick(this, keys), (st) => {
    _.assert(_.isEmpty(_.without(Pyson.types(st), typeof null, typeof 0)),
      'bad type');
  });
}
_.inherit(DTMixin, Pyson);
DTMixin.prototype.types = function () {
  return [typeof {}];
};
DTMixin.prototype.resolve = function (context, items, deltas, fn) {
  var keys = [].concat(items, deltas);
  var resolved = _.mapObject(_.pick(this, keys), (v) => Pyson.resolve(v,
    context));
  if (resolved.M) {
    resolved.M -= 1;
  }
  if (resolved.ms) {
    resolved.ms /= 1000;
  }
  var dt = fn.apply(null, _.map(items, (k) => resolved[k]));
  var delta = _.map(deltas, (k) => resolved[k]);
  var dur;
  if (_.size(delta) === 3) {
    dur = _.timedelta.apply(null, [].concat(delta, [0, 0, 0, 0]));
  }
  else if (_.size(delta) === 4) {
    dur = _.timedelta.apply(null, [].concat([0, 0, 0], delta));
  }
  else {
    dur = _.timedelta.apply(null, delta);
  }
  return dt.add(dur);
};
//
// exports
module.exports = DTMixin;
