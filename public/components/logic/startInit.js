function startInit(allPages) {
    'use strict';

    let signUpPage = document.createElement('div');
    signUpPage.classList.add('js-signup');
    let signInPage = document.createElement('div');
    signInPage.classList.add('js-signin');
    let logoutPage = document.createElement('div');
    logoutPage.classList.add('js-logout');
    let delUserPage = document.createElement('div');
    delUserPage.classList.add('js-deleteuser');

    allPages.appendChild(signUpPage);
    allPages.appendChild(signInPage);
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
    let formSignUp = new Form({
        el: document.createElement('div'),
        data: {
            title: 'Hi! Please sign up',
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
                    text: 'Sign Up',
                    attrs: {
                        type: 'submit'
                    }
                }
            ]
        }
    });
    let formSignIn = new Form({
        el: document.createElement('div'),
        data: {
            title: 'Hi! Please sign in',
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
    signUpPage.appendChild(formSignUp.el);
    signInPage.appendChild(formSignIn.el);
    delUserPage.appendChild(formDelUser.el);

    allPages.formLogout = formLogout;
    allPages.formSignIn = formSignIn;
    allPages.formSignUp = formSignUp;
    allPages.formDelUser = formDelUser;

    allPages.signUpPage = signUpPage;
    allPages.signInPage = signInPage;
    allPages.logoutPage = logoutPage;
    allPages.delUserPage = delUserPage;

    logoutPage.hidden = true;
    delUserPage.hidden = true;
    signUpPage.hidden = true;
    signInPage.hidden = true;

};
