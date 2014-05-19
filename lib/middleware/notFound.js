var logger = require('../logger');

exports.index = function (req, res, next) {
	logger.error('Not found');
	res.json(404, 'Not Found');
}