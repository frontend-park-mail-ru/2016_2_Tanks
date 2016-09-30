var Q = require("q");

// For demonstration: Function to create promises that resolve after a specified time
function P(value, factor) {
    return Q.delay(100 * (factor || 1)).then(function () {
        return value;
    })
}


var deep = require("./q-deep.js");

deep(2).done(console.log); // == 2
deep(P(2)).done(console.log); // == 2
deep({a: 1, b: P(2)}).done(console.log); // == {a: 1, b: 2}
deep({a: 1, b: [ 2, P(3)]}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: { c: 2, d: P(3)}}).done(console.log); // == { a: 1, b: { c: 2, d: 3 } }

// Nesting promises
deep({a: 1, b: P([ 2, P(3)])}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: P([ 2, P(3)])}).done(console.log); // == {a: 1, b: [2,3]}
deep({a: 1, b: P({ c: 2, d: P(3)})}).done(console.log); // == { a: 1, b: { c: 2, d: 3 } }