var _ = require('underscore');
var Pyson = require('./pyson');

function EqualPyson(desc) {
  Pyson.call(this, desc);
  var t1 = _(Pyson.types(this.s1))
    .uniq()
    .orderBy();
  var t2 = _(Pyson.types(this.s2))
    .uniq()
    .orderBy();
  _.assert(_.isEqual(t1, t2), 'bad types');
}
_.inherit(EqualPyson, Pyson);
EqualPyson.prototype.types = function () {
  return [typeof false];
};
EqualPyson.prototype.resolve = function (context) {
  var v1 = Pyson.resolve(this.s1, context);
  var v2 = Pyson.resolve(this.s2, context);
  return _.isEqual(v1, v2); // TODO: manage dates
};
//
// exports
module.exports = EqualPyson;
