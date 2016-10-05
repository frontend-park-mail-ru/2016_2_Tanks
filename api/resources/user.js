exports.post = {
    "tags": ["user"],
    "description": "Метод создания пользователя",
    "parameters": [
        {
            "name": "email",
            "description": "Email пользователя",
            "type": "string"
        },
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
            "description": "Пользоатель добавлен"
        },
        "403": {
            "description": "Ошибка при выполнении запроса"
        }
    },
    "x-amples": [{
        "description": "Добавление пользователя",
        "request": {
            "params": {
                "login": "test",
                "password": "testpwd",
                "email": "test@test.ok"
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
exports.get = {
    "tags": ["user"],
    "description": "Метод получения информации о пользователе",

    "responses": {
        "200": {
            "description": "Информация о пользователе",
            "schema": {
                "$ref": "#/definitions/User"
            }
        },
        "401": {
            "description": "Ошибка при выполнении запроса"
        }
    },
    "x-amples": [{
        "description": "Получение пользователя",
        "request": {},
        "response": {
            "status": 200,
            "headers": {
                "content-type": "application/json"
            },
            "data": {
                "login": "test",
                "email": "test@test.ok"
            }
        }
    }]
};
exports.put = {
    "tags": ["user"],
    "description": "Метод изменения данных пользователя",
    "parameters": [
        {
            "name": "email",
            "description": "Email пользователя",
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
            "description": "Пользователь изменён"
        },
        "403": {
            "description": "Ошибка при выполнении запроса"
        }
    }
};
exports.delete = {
    "tags": ["user"],
    "description": "Метод удаления пользователя",

    "responses": {
        "200": {
            "description": "Пользователь удалён"
        },
        "403": {
            "description": "Ошибка при выполнении запроса"
        }
    },
    "x-amples": [{
        "description": "удаление пользователя",
        "request": {},
        "response": {
            "status": 200,
            "headers": {
                "content-type": "application/json"
            }
        }
    }]
};
