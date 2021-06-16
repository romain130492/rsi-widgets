


## rsi-api-vanilla transpilation

0- before using babelisation we need to build our @akkadu modules.
1- Babelisation of our node dependencies (to es5)
  Some of our @akkadu/ dependencies we are using in the `interpretation-player` are using es6.

  In order to use them in browser we need to transpile them to es5.

  We use babel + webpack to achieve that.



`http://localhost:5500/rsi-api-widgets/packages/rsi-api-vanilla/index.html?rsi-roomname=aljx`