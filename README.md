Iadixcore
=======

[![Build Status](https://travis-ci.org/bitpay/bitcore.svg?branch=master)](https://travis-ci.org/bitpay/bitcore)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore.svg)](https://coveralls.io/r/bitpay/bitcore)

A pure, powerful core for your iadixcoin project.

Iadixcore is a complete, native interface to the Iadixcoin network, and provides the core functionality needed to develop apps for iadixcoin based on bitcore.

#Principles

Iadixcoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Iadixcoin network allows for highly resilient iadixcoin infrastructure, and the developer community needs reliable, open-source tools to implement iadixcoin apps and services.

**Iadixcore unchains developers from fallible, centralized APIs, and provides the tools to interact with the real Iadixcoin network.**

#Get Started

Iadixcore runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

```
npm install iadixcore
```

It is a collection of objects useful to iadixcoin applications; class-like idioms are enabled via [Soop](https://github.com/bitpay/soop). In most cases, a developer will require the object's class directly. For instance:

```javascript
var bitcore = require('iadixcore');
var Address = bitcore.Address;
var Transaction = bitcore.Transaction;
var PeerManager = bitcore.PeerManager;
```

#Examples

Examples are provided [here](examples.md)
Build the examples by installing and running gulp:

```
npm install -g gulp
gulp
```

Javascript files available at [/examples](/examples) folder.


#Security

Please use at your own risk.

Iadixcore is still under heavy development and not quite ready for "drop-in" production use. If you find a security issue, please email security@bitcore.io.

#Browser support

## Building the browser bundle

To build iadixcore full bundle for the browser (this is automatically executed after you run `npm install`):

```
node browser/build.js -a
```

This will generate a `browser/bundle.js` file which you can include in your HTML to use iadixcore in the browser.

##Example browser usage

From example/simple.html

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="../browser/bundle.js"></script>
    <script>
      var bitcore = require('iadixcore');
      var Address = bitcore.Address;
      var a = new Address('1KerhGhLn3SYBEQwby7VyVMWf16fXQUj5d');
      console.log('1KerhGhLn3SYBEQwby7VyVMWf16fXQUj5d is valid? '+a.isValid());
    </script>
  </body>
</html>
```

You can check a more complex usage example at examples/example.html.

## Generating a customized browser bundle

To build the main iadixcore bundle, run:

```
node browser/build.js -m
```

To build all features into the iadixcore bundle (which will lead to a large filesize), run:

```
node browser/build.js -a
```

To generate a customized iadixcore bundle, you can specify which submodules you want to include in it with the -s option:

```
node browser/build.js -s lib/Transaction,lib/Address
```

This will generate a `browser/bundle.js` containing only the Transaction and Address class, with all their dependencies.  Use this option if you are not using the whole iadixcore library, to optimize the bundle size, script loading time, and general resource usage.

## Tests

Run tests in node:

```
mocha
```

Or generate tests in the browser:

```
grunt shell
```

And then open test/index.html in your browser.

To run the code coverage report:

```
npm run-script coverage
```

And then open coverage/lcov-report/index.html in your browser.

#License

**Code released under [the MIT license](https://github.com/iadix/iadixcore/blob/master/LICENSE).**

Copyright 2013-2014 BitPay, Inc. Iadixcore is a trademark maintained by Iadix.

