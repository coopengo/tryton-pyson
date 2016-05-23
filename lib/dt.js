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
  var dt = fn(_.pick(resolved, items));
  var delta = _.pick(resolved, deltas);
  if (_.isEmpty(delta)) {
    return dt;
  }
  var update = {};
  _.objFilter(delta, function (v) {
      return (_.isUndefined(v) || v === null);
    });
  _.each(_.pairs(delta), function(p) {
    // Convert 'dX' keys to 'X' keys
    update[items[_.indexOf(deltas, p[0])]] = p[1];
  });
  dt.add(update);
  return dt;
};
//
// exports
module.exports = DTMixin;
