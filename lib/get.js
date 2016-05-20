var _ = require('underscore');
var Pyson = require('./pyson');

function GetPyson(desc) {
  Pyson.call(this, desc);
  if (_.isUndefined(this.d)) {
    this.d = null;
  }
  _.assert(_.isEmpty(_.without(Pyson.types(this.v), typeof {})), 'bad types');
  _.assert(_.isEmpty(_.without(Pyson.types(this.k), typeof '')), 'bad types');
}
_.inherit(GetPyson, Pyson);
GetPyson.prototype.types = function () {
  return Pyson.types(this.d);
};
GetPyson.prototype.resolve = function (context) {
  var v = Pyson.resolve(this.v, context);
  var k = Pyson.resolve(this.k, context);
  var r = v[k];
  return _.isUndefined(r) ? this.d : r;
};
//
// exports
module.exports = GetPyson;
