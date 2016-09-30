'use strict';

var Q = require('q');
var _ = require('lodash');
var parseURL = require('url').parse;
var net_modules = {
    http: require('http'),
    https: require('https')
};

module.exports = get;

function get (url, options) {
    options = options || {};

    var config = parseURL(url);
    config.method = options.method || 'GET';
    config.headers = options.headers || {};

    var binary = options.binary;
    var redirect = options.redirect;

    return Q.Promise(function (resolve, reject, notify) {
        var http = net_modules[url.match(/^https?/)[0]];

        http.request(config, function (response) {
            if (!binary) {
                response.setEncoding('utf8');
            }

            var data = [];

            response.on('data', function (chunk) {
                data.push(chunk);
            });

            response.on('end', function () {
                if (response.statusCode < 300) {
                    notify({
                        url: url,
                        options: options,
                        status: response.statusCode,
                        headers: response.headers
                    });

                    resolve({
                        url: url,
                        options: options,
                        status: response.statusCode,
                        headers: response.headers,
                        rawHeaders: groupRawHeaders(response.rawHeaders),
                        data: binary ? Buffer.concat(data) : data.join('')
                    });
                } else if (redirect && response.statusCode < 400) {
                    notify({
                        url: url,
                        options: options,
                        status: response.statusCode,
                        headers: response.headers,
                        redirect: response.headers.location
                    });

                    resolve(get(response.headers.location));
                } else {
                    notify({
                        url: url,
                        options: options,
                        status: response.statusCode,
                        headers: response.headers
                    });

                    reject({
                        url: url,
                        options: options,
                        status: response.statusCode,
                        headers: response.headers,
                        rawHeaders: groupRawHeaders(response.rawHeaders),
                        data: binary ? Buffer.concat(data) : data.join('')
                    });
                }
            });
        }).on('error', reject).end();
    });
}

function groupRawHeaders (list) {
    return _.chain(list).groupBy(function (value, index) {
        return Math.floor(index / 2);
    }).map(function (arr) {
        return {
            name: arr[0],
            value: arr[1]
        }
    }).value();
}
