exports.get = {
	"tags": ["session"],
	"description": "Метод получает авторизационную сессию",

	"responses": {
		"200": {
			"description": "Пользователь",
			"schema": {
				"$ref": "#/definitions/User"
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
			"data":{
				"login": "test",
				"password": "testpwd"
			}
		}
	}]
};

exports.post = {
	"tags": ["session"],
	"description": "Метод логина пользователя",
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
			"description": "Вход выполнен"
		},
		"401": {
			"description": "Ошибка при выполнении запроса"
		}
	},
	"x-amples": [{
		"description": "логин пользователя",
		"request": {
			"params": {
				"login": "test",
				"password": "testpwd"
			}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			}
		}
	}]
};

exports.delete = {
	"tags": ["session"],
	"description": "Метод логаута пользователя",

	"responses": {
		"200": {
			"description": "Пользователь успешно вышел"
		},
		"403": {
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
