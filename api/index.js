module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.1",
		"title": "SteamTanks API",
		"description": "SteamTanks"
	},
	"basePath": "/api",
	"schemes": ["http"],
   	"host": " http://tankssteam.herokuapp.com",

	paths: {
		'/session': require('./resources/session'),
		'/user': require('./resources/user'),
		'/battle': require('./resources/battle')
	},

	definitions: {
		User: require('./scheme/User'),
		Battle: require('./scheme/Battle')
	}

}
