function startInit(allPages) {
    'use strict';

    let loginPage = document.createElement('div');
    loginPage.classList.add('js-login');
    let signinPage = document.createElement('div');
    signinPage.classList.add('js-signin');
    let logoutPage = document.createElement('div');
    logoutPage.classList.add('js-logout');
    let delUserPage = document.createElement('div');
    delUserPage.classList.add('js-deleteuser');

    allPages.appendChild(loginPage);
    allPages.appendChild(signinPage);
    allPages.appendChild(logoutPage);
    allPages.appendChild(delUserPage);

    let formLogout = new Form({
        el: document.createElement('div'),
        data: {
            title: '',
            fields: [],
            controls: [
                {
                    text: 'LogOut',
                    attrs: {
                        type: 'submit'
                    }
                }
            ]
        }
    });
    let formDelUser = new Form({
        el: document.createElement('div'),
        data: {
            title: '',
            fields: [],
            controls: [
                {
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

    logoutPage.appendChild(formLogout.el);
    loginPage.appendChild(formLogin.el);
    signinPage.appendChild(formSignin.el);
    delUserPage.appendChild(formDelUser.el);

    allPages.formLogout = formLogout;
    allPages.formSignin = formSignin;
    allPages.formLogin = formLogin;
    allPages.formDelUser = formDelUser;

    allPages.loginPage = loginPage;
    allPages.signinPage = signinPage;
    allPages.logoutPage = logoutPage;
    allPages.delUserPage = delUserPage;

    logoutPage.hidden = true;
    delUserPage.hidden = true;
    loginPage.hidden = true;
    signinPage.hidden = true;

};