# get-promise

HTTP(S) GET with promises. Handles redirects transparently, but
notifies about them.

Treats all responses as UTF-8 encoded text.

## Usage

    var get = require('get-promise');

    get(url, options).then(function (result) {
        // options (optional argument) can be:
        // {
        //     method: 'GET' by default
        // }
        // result is:
        // {
        //     url: url,
        //     status: status code,
        //     headers: { … },
        //     rawHeaders: [{ name: …, value: … }, …]
        //     data: response body,
        //     options: options
        // }
    }, function (error) {
        // error is either:
        // - same as 'result' above for HTTP error
        // - an exception for other errors
    }, function (notice) {
        // notice is either:
        // {
        //     url: url,
        //     status: status code,
        //     headers: { … }
        //     options: options,
        // }
        // or in case of redirect:
        // {
        //     url: url,
        //     redirect: headers.location,
        //     status: status code,
        //     headers: { … },
        //     options: options
        // }
    });

## LICENSE

MIT
