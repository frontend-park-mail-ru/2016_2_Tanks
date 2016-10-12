exports.get = {
	"tags": ["battle"],
	"description": "Метод получает адрес данной игры",

	"responses": {
		"200": {
			"description": "Id игры",
			"schema": {
				"$ref": "#/definitions/Battle"
			}
		},
		"401": {
			"description": "Ошибка"
		}
	},
	"x-amples": [{
		"description": "получение сессии",
		"request": {
			"params": {}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			},
			"data" : {
				"id" : Math.floor(Math.random() * 10000)
			},
			"validator": function (res) {

				if (typeof res.id !== 'number' ) {
					return 'не корректный id';
				}

				return true;
			}
		}
	}]

};

exports.post = {
	"tags": ["battle"],
	"description": "Метод входа в игру",
	"parameters": [
		{
			"name": "login",
			"description": "Логин пользователя",
			"type": "string"
		},
		{
			"name": "password",
			"description": "Пароль пользователя",
			"type": "string"
		}
	],
	"responses": {
		"200": {
			"description": "Id сессии",
			"schema": {
				"$ref": "#/definitions/Session"
			}
		},
		"400": {
			"description": "Ошибка при выполнении запроса"
		}
	},
	"x-amples": [{
		"description": "логин пользователя",
		"request": {
			"params": {
				"login": "dmitrydorofeev",
				"password": "veeforodyrtimd"
			}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			},
			"validator": function (res) {

				if (typeof res.id !== 'number' ) {
					return 'не корректный id';
				}

				return true;
			}
		}
	}]
};

exports.delete = {
	"tags": ["battle"],
	"description": "Метод логаута пользователя",

	"responses": {
		"200": {
			"description": "Успешный запрос"
		},
		"400": {
			"description": "Ошибка при выполнении запроса"
		}
	},
	"x-amples": [{
		"description": "логаут пользователя",
		"request": {
			"params": {}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			}
		}
	}]
};
