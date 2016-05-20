exports.eval = [{
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: {
    value: false
  },
  r: false
}, {
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'Eval',
    v: 'value',
    d: true
  },
  c: {
    value: 'string'
  },
  r: Error
}];
exports.and = [{
  p: {
    __class__: 'And',
    s: [true, true, false]
  },
  c: null,
  r: false
}, {
  p: {
    __class__: 'And',
    s: [true, true, true]
  },
  c: null,
  r: true
}, {
  p: {
    __class__: 'And',
    s: [true, 1]
  },
  c: null,
  r: Error
}];
