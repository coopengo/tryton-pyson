var _ = require('underscore');

function Pyson(desc) {
  _.extendOwn(this, desc);
}
Pyson.prototype.types = function () {
  _.notImplem();
};
Pyson.prototype.resolve = function () {
  _.notImplem();
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
