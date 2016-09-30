
module.exports = function (Promise) {

    function handleArray(arr) {
        return new Promise(function(fulfill, reject) {
            var counter = arr.length;
            var result = [];
            arr.forEach(function(element,index) {
              handleAny(element).then(function(value) {
                  result[index] = value;
                  if (counter-- === 0) {
                      fulfill(result);
                  }
              }, function(err) {
                  reject(err);
              })
            })
        })
    }

    function handleObject(obj) {
        var keys = Object.keys(obj);
        var values = keys.map(function (key) {
            return obj[key];
        });
        return handleArray(values).then(function(valueResults) {
            var result = {};
            for (var i=0; i<keys.length; i++) {
                result[keys[i]] = valueResults[i];
            }
            return result;
        });
    }

    /**
     * Check if this is something like a promise (taken from the Q-module)
     * @param {*} obj the object to check for being a promise
     * @returns {boolean} true, if the object is a promise
     */
    function isPromiseAlike(obj) {
        return obj === Object(obj) && typeof obj.then === 'function'
    }


    /**
     * Return a promise for an object, array, or other value, with all internal promises resolved.
     * @param obj
     * @returns {Promise}
     */
    function handleAny(obj) {
        if (isPromiseAlike(obj)) {
            return obj.then(handleAny);
        } else if ('[object Object]' === Object.prototype.toString.call(obj)) {
            return handleObject(obj);
        } else if ('[object Array]' === Object.prototype.toString.call(obj)) {
            return handleArray(obj);
        } else {
            return new Promise(function(fulfill) {
                return fulfill(obj);
            });
        }
    }

    return handleAny;

}



