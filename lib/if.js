var _ = require('underscore');
var Pyson = require('./pyson');

function IfPyson(desc) {
  Pyson.call(this, desc);
  _.assert(_.isEmpty(_.without(Pyson.types(this.c), typeof false)), 'bad types');
  var tt = _.orderBy(_.unique(Pyson.types(this.t)));
  var te = _.orderBy(_.unique(Pyson.types(this.e)));
  _.assert(_.isEqual(tt, te), 'bad types');
}
IfPyson.prototype.types = function () {
  return Pyson.types(this.t);
};
IfPyson.prototype.resolve = function (context) {
  return Pyson.resolve(this.c, context) ? Pyson.resolve(this.t, context) :
    Pyson.resolve(this.e, context);
};
//
// exports
module.exports = IfPyson;
