var _ = require('underscore');
var Pyson = require('./pyson');
//
function DTMixin(desc, items, deltas) {
  var keys = [].concat(items, deltas);
  _.each(keys, (k) => {
    this[k] = null;
  });
  Pyson.call(this, desc);
  _.pick(this, keys)
    .each((st) => {
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
  var resolved = _.pick(this, keys)
    .mapObject((v) => Pyson.resolve(v, context));
  if (resolved.M) { // nils + 0 (not acceptable)
    resolved.M -= 1;
  }
  if (resolved.ms) { // nils + 0 (no effect)
    resolved.ms /= 1000;
  }
  var dt = fn(_.pick(resolved, items));
  var delta = _.pick(resolved, deltas)
    .filter((v) => v !== null && v !== 0)
    .pairs()
    .map((p) => [items[_.indexOf(deltas, p[0])], p[1]])
    .object();
  dt.add(delta);
  return dt;
};
//
// exports
module.exports = DTMixin;
