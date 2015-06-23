var S = require('s');

var cmp = {
  test    : S.curry( function( compare, a, b, value ) { return compare( S.cv(a,value), S.cv(b,value)); } ),
  select  : S.curry( function( test, a, b, value ) { return S.cv(test,value) ? S.cv(a,value) : S.cv(b,value); } ),
};

exports = module.exports = cmp;
