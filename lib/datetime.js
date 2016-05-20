var _ = require('underscore');
var DTMixin = require('./dt');
//
var items = ['y', 'M', 'd', 'h', 'm', 's', 'ms'];
var deltas = ['dy', 'dM', 'dd', 'dh', 'dm', 'ds', 'dms'];
//
function DateTimePyson(desc) {
  DTMixin.call(this, desc, items, deltas);
}
_.inherit(DateTimePyson, DTMixin);
DateTimePyson.prototype.resolve = function (context) {
  return this.__.resolve.call(this, context, items, deltas, _.datetime);
};
//
// exports
module.exports = DateTimePyson;
