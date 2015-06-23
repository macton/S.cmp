var S = require('s');

S.cmp = require('../s.cmp');

console.log( S.cmp.test( function( a, b ) { return a == b; }, 'Foo', function( a ) { return a['foo']; }, { foo: 'Foo' } ) );
