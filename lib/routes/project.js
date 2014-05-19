var logger = require("../logger");
var S = require('string');
var login = require('../../test/login');
var ProjectService = require('../project');
var Project = new ProjectService();

exports.post = function (req, res) {
	logger.info('Post ' + req.body.name);

	if(S(req.body.name).isEmpty()) {
		return res.json(400, 'Bad Request');
	}

	req.body.user = login.user;
	req.body.token = login.token;

	Project.post(req.body.name, req.body, function (error, project) {
		if(error) {
			return res.json(500, 'Internal server error');
		}

		if(project == null) {
			return res.json(409, 'Conflict');
		}

		res.location('/project/' + project._id);
		return res.json(201, project);
	})
}