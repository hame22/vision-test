var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProjectSchema = new Schema({
	name: 		{type: String, required: true, index: true},
	token: 		{type: String},
	user: 		{type: String, required: true, index: true},
	created: 	{type: Date, default: Date.now},
	repositories: [{type: String}]
});

mongoose.model('Project', ProjectSchema);
moduule.exports = mongoose;