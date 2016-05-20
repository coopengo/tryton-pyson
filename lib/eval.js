var _ = require('underscore');
var Pyson = require('./pyson');

function EvalPyson(desc) {
  Pyson.call(this, desc);
  if (_.isUndefined(this.d)) {
    this.d = '';
  }
}
_.inherit(EvalPyson, Pyson);
EvalPyson.prototype.types = function () {
  return Pyson.types(this.d);
};
EvalPyson.prototype.resolve = function (context) {
  context = context || {};
  var r = context[this.v];
  if (_.isUndefined(r)) {
    r = this.d;
  }
  else {
    _.assert(_.contains(this.types(), typeof r), 'bad value');
  }
  return r;
};
//
// exports
module.exports = EvalPyson;
