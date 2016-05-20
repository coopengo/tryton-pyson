var _ = require('underscore');

function Pyson(desc) {
  _.assign(this, desc);
}
Pyson.prototype.types = function () {
  _.raise('not implemented');
};
Pyson.prototype.resolve = function () {
  _.raise('not implemented');
};
//
Pyson.types = function (st) {
  if (st instanceof Pyson) {
    return st.types();
  }
  else {
    return [typeof st];
  }
};
Pyson.resolve = function (st, context) {
  if (st instanceof Pyson) {
    return st.resolve(context);
  }
  else {
    return st;
  }
};
//
// exports
module.exports = Pyson;
