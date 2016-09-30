Deprecation notice
------------------

This project is now essentially a wrapper for the [deep-aplus](https://npmjs.com/package/deep-aplus)-package.
The same functionality can be achieved by the following snippet:

```js
var Q = require("q");
var deep = require('deep-aplus')(Q.Promise);
```

You should have a look at `deep-aplus` since it will work with you own version of Q (or
any other promise library)

Example
-------

```js
var Q = require("q");

// For demonstration: Function to create promises that resolve after a specified time
function P(value, factor) {
    return Q.delay(100 * (factor || 1)).then(function () {
        return value;
    })
}


var deep = require("q-deep");

deep(2).done(console.log); // == 2
deep(P(2)).done(console.log); // == 2
deep({a: 1, b: P(2)}).done(console.log); // == {a: 1, b: 2}
deep({a: 1, b: [ 2, P(3)]}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: { c: 2, d: P(3)}}).done(console.log); // == { a: 1, b: { c: 2, d: 3 } }

// Nesting promises
deep({a: 1, b: P([ 2, P(3)])}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: P([ 2, P(3)])}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: P({ c: 2, d: P(3)})}).done(console.log); // == { a: 1, b: { c: 2, d: 3 } }
    
```



Changes
--------
#### 1.0.3
  * Fix typo in README
#### 1.0.2
  * Added deprecation notice. Please use `deep-aplus` instead.
    This package is now only a wrapper for `deep-aplus`
  
#### 1.0.1
  * Use "Q.isPromiseAlike" to check for promises. Otherwise, promises from different Q-instances
    are not resolved properly.

#### 1.0.0

  * No changes, but since the api works well so far, it is now considered stable in terms of semver.


#### 0.0.2
  * Fixes in README and examples

#### 0.0.1
  * Initial version
