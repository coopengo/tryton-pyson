var _ = require('underscore');
var DTMixin = require('./dt');
//
var items = ['y', 'M', 'd'];
var deltas = ['dy', 'dM', 'dd'];
//
function DatePyson(desc) {
  DTMixin.call(this, desc, items, deltas);
}
_.inherit(DatePyson, DTMixin);
DatePyson.prototype.resolve = function (context) {
  return this.__.resolve.call(this, context, items, deltas, _.date);
};
//
// exports
module.exports = DatePyson;
