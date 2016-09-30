exports.generate = function (spec, where) {
	var bootprint = require('bootprint'),
		fs = require('fs');

	bootprint
		.load(require('bootprint-swagger'))
		.build(spec, where + '/api')
		.generate()
		.done(function (res) {
			var txt = fs.readFileSync(res[0]).toString();
			txt = txt.replace('main.css', '/api/main.css');
			fs.writeFileSync(res[0], txt);
		});
};


exports.runTests = function (spec) {
	var preq = require('preq');
	var swaggerTests = require('swagger-test');

	return function (req, res) {
		var data = {};
		var xamples = swaggerTests.parse(spec);

		Promise.all(xamples.map(function (xample) {

			return new Promise(function (resolve, reject) {

				return preq[xample.request.method](xample.request)
					.then(function (response) {
						var body = response.body;

						if (body instanceof Buffer) {
							body = JSON.parse(body.toString());
						}

						data[xample.description] = xample.response.validator(body);
						resolve();
					}, function () {
						data[xample.description] = 'fatal';
						resolve();
					});
			})

		})).then(function () {
			res.send(JSON.stringify(data, 1, 1));
		});
	};

};

exports.mock = function (schema) {
	return require('json-schema-faker')(schema);
};
