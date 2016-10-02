(function () {
    'use strict';

    if (typeof window === 'object') {

        //import
        let user = {login: "", email: "", password: ""};
        let addressHost = "http://javaprodaction.herokuapp.com/";
        //let addressHost = "http://localhost:8080/";

        let Button = window.Button;
        let Form = window.Form;

        let loginPage = document.querySelector('.js-login');
        let signinPage = document.querySelector('.js-signin');
        let profilePage = document.querySelector('.js-profile');

        let formProfile = new Form({
            el: document.createElement('div'),
            data: {
                title: '',
                fields: [],
                controls: [
                    {
                        className:'LogOutButton',
                        text: 'LogOut',
                        attrs: {
                            type: 'submit'
                        }
                    },
                    {
                        className:'DeleteUserButton',
                        text: 'DeleteUser',
                        attrs: {
                            type: 'submit'
                        }
                    }
                ]
            }
        });
        let formLogin = new Form({
            el: document.createElement('div'),
            data: {
                title: 'Hi! Please login',
                fields: [
                    {
                        name: 'login',
                        type: 'text',
                        attrs: 'autofocus placeholder="Login" required '
                    },
                    {
                        name: 'email',
                        type: 'email',
                        attrs: 'placeholder="E-mail" required '
                    },
                    {
                        name: 'password',
                        type: 'password',
                        attrs: 'placeholder="Password" required '
                    }
                ],
                controls: [
                    {
                        text: 'LogIn',
                        attrs: {
                            type: 'submit'
                        }
                    }
                ]
            }
        });
        let formSignin = new Form({
            el: document.createElement('div'),
            data: {
                title: 'Hi! Please signin',
                fields: [
                    {
                        name: 'login',
                        type: 'text',
                        attrs: 'autofocus placeholder="Login" required '
                    },
                    {
                        name: 'password',
                        type: 'password',
                        attrs: 'placeholder="Password" required '
                    }
                ],
                controls: [
                    {
                        text: 'SignIn',
                        attrs: {
                            type: 'submit'
                        }
                    }
                ]
            }
        });
        profilePage.appendChild(formProfile.el);
        loginPage.appendChild(formLogin.el);
        signinPage.appendChild(formSignin.el);



        let xhr = new XMLHttpRequest();
        xhr.open('GET', addressHost + 'api/session', false);
        xhr.withCredentials = true;
        xhr.send();

        if (xhr.status === 400) {
            loginPage.hidden = false;
            signinPage.hidden = false;
        }
        else {
            let responseData = JSON.parse(xhr.response);
            let responseDataFields = JSON.parse(xhr.response);
            user.login = responseDataFields['login'];
            user.email = responseDataFields['email'];

            formProfile.reFill({
                data: {
                    title: 'Hi! ' + user.login,
                    fields: [
                        {
                            text: user.email
                        }
                    ]
                }
            });
            profilePage.hidden = false;
        };

        //formLogin.el.querySelectorAll('button')[0].on('submit', event => {
        formLogin.on('submit', event => {
            event.preventDefault();

            let formData = formLogin.getFormData();

            let xhr = new XMLHttpRequest();
            xhr.open('POST', addressHost + 'api/user', false);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.withCredentials = true;
            xhr.send(JSON.stringify(formData));

            if (xhr.status === 200) {
                loginPage.hidden = true;
                signinPage.hidden = true;
                profilePage.hidden = false;

                let responseDataFields = JSON.parse(xhr.response);//parseJSON(JSON.parse(xhr.response));

                user.login = formData['login'];
                user.email = formData['email'];
                user.password = formData['password'];

                formProfile.reFill({
                    data: {
                        title: 'Hi! ' + user.login,
                        fields: [
                            {
                                text: user.email
                            }
                        ]
                    }
                });
            }
            else {
                alert("this login is zanet");
            }
        });

        formSignin.on('submit', event => {
            event.preventDefault();

            let formData = formSignin.getFormData();

            let xhr = new XMLHttpRequest();
            xhr.open('POST', addressHost + 'api/session', false);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.withCredentials = true;
            xhr.send(JSON.stringify(formData));

            if (xhr.status === 200) {
                loginPage.hidden = true;
                signinPage.hidden = true;
                profilePage.hidden = false;

                let responseDataFields = JSON.parse(xhr.response);//parseJSON(JSON.parse(xhr.response));

                user.login = formData['login'];
                user.password = formData['password'];

                formProfile.reFill({
                    data: {
                        title: 'Hi! ' + user.login,
                        fields: [
                            {
                                text: responseDataFields['email']
                            }
                        ]
                    }
                });
            }
            else {
                alert("wrong password");
            }
        });

/*
        formProfile.on('submitDelUser', event=> {
            event.preventDefault();

            profilePage.hidden = true;
            loginPage.hidden = false;
            signinPage.hidden = false;

            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', addressHost + 'api/user', false);
            xhr.withCredentials = true;
            xhr.send();

            alert(`by, ${user.login}, you are deleted`)
        });
*/

        formProfile.on('submit', event=> {
            event.preventDefault();

            //console.log(event.currentTarget);

            profilePage.hidden = true;
            loginPage.hidden = false;
            signinPage.hidden = false;

            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', addressHost + 'api/session', false);
            xhr.withCredentials = true;
            xhr.send();

            alert(`by, ${user.login}`);
        });


    }

    function parseJSON(data) {
        let dataFields = [];
        if (!data)
            return [];
        Object.keys(data).forEach(element => {
            if (!element) {
                return;
            }
            dataFields.push({
                text: element + ' : ' + JSON.stringify(dataFields[element])
            });
        });
        return dataFields;
    }

    function hello(text) {
        return 'Привет, ' + text;
    }

    if (typeof exports === 'object') { // for NodeJS
        exports.hello = hello;
    }

})();

