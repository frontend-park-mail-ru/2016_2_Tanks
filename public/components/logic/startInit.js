function startInit(allPages) {
    'use strict';

    let signUpDiv = document.createElement('div');
    signUpDiv.classList.add('js-signup');
    let signInDiv = document.createElement('div');
    signInDiv.classList.add('js-signin');
    let logoutDiv = document.createElement('div');
    logoutDiv.classList.add('js-logout');
    let delUserDiv = document.createElement('div');
    delUserDiv.classList.add('js-deleteuser');

    let buttonPlayDiv = document.createElement('div');
    buttonPlayDiv.classList.add('js-buttonPlay');
    let buttonSignInDiv = document.createElement('div');
    buttonSignInDiv.classList.add('js-buttonSignIn');
    let buttonSignUpDiv = document.createElement('div');
    buttonSignUpDiv.classList.add('js-buttonSignUp');
    let buttonBackDiv = document.createElement('div');
    buttonBackDiv.classList.add('js-buttonBack');
    let buttonJoinDiv = document.createElement('div');
    buttonJoinDiv.classList.add('js-buttonJoin');
    let buttonWithFriendsDiv = document.createElement('div');
    buttonWithFriendsDiv.classList.add('js-with-friends');
    let buttonSignOutDiv = document.createElement('div');
    buttonSignOutDiv.classList.add('js-sign-out');




    allPages.appendChild(signUpDiv);
    allPages.appendChild(signInDiv);
    allPages.appendChild(logoutDiv);
    allPages.appendChild(delUserDiv);

    allPages.appendChild(buttonPlayDiv);
    allPages.appendChild(buttonSignInDiv);
    allPages.appendChild(buttonSignUpDiv);
    allPages.appendChild(buttonBackDiv);
    allPages.appendChild(buttonJoinDiv);
    allPages.appendChild(buttonWithFriendsDiv);
    allPages.appendChild(buttonSignOutDiv);





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

    let buttonPlay = new Button ({
      className: 'button_Play',
      text: "Play"
    });
    let buttonSignIn = new Button ({
      className: 'button_Sign_In',
      text: "Sign In"
    });
    let buttonSignUp = new Button ({
      className: 'button_Sign_Up',
      text: "Sign Up"
    });
    let buttonBack = new Button ({
      className: 'button_Back',
      text: "Back"
    });
    let buttonJoin = new Button ({
      className: 'button_Join',
      text: "Join alone"
    });
    let buttonWithFriends = new Button ({
      className: 'button_With_Friends',
      text: "With friends"
    });
    let buttonSignOut = new Button ({
      className: 'button-Sign-Out',
      text: "sign out"
    });



    logoutDiv.appendChild(formLogout.el);
    signUpDiv.appendChild(formSignUp.el);
    signInDiv.appendChild(formSignIn.el);
    delUserDiv.appendChild(formDelUser.el);

    buttonPlayDiv.appendChild(buttonPlay.el);
    buttonSignInDiv.appendChild(buttonSignIn.el);
    buttonSignUpDiv.appendChild(buttonSignUp.el);
    buttonBackDiv.appendChild(buttonBack.el);
    buttonJoinDiv.appendChild(buttonJoin.el);
    buttonWithFriendsDiv.appendChild(buttonWithFriends.el);
    buttonSignOutDiv.appendChild(buttonSignOut.el);



    allPages.formLogout = formLogout;
    allPages.formSignIn = formSignIn;
    allPages.formSignUp = formSignUp;
    allPages.formDelUser = formDelUser;

    allPages.buttonPlay = buttonPlay;
    allPages.buttonSignIn = buttonSignIn;
    allPages.buttonSignUp = buttonSignUp;
    allPages.buttonBack = buttonBack;
    allPages.buttonJoin = buttonJoin;
    allPages.buttonWithFriends = buttonWithFriends;
    allPages.buttonSignOut = buttonSignOut;




    allPages.signUpDiv = signUpDiv;
    allPages.signInDiv = signInDiv;
    allPages.logoutDiv = logoutDiv;
    allPages.delUserDiv = delUserDiv;

    allPages.buttonPlayDiv = buttonPlayDiv;
    allPages.buttonSignInDiv = buttonSignInDiv;
    allPages.buttonSignUpDiv = buttonSignUpDiv;
    allPages.buttonBackDiv = buttonBackDiv;
    allPages.buttonJoinDiv = buttonJoinDiv;
    allPages.buttonWithFriendsDiv = buttonWithFriendsDiv;
    allPages.buttonSignOutDiv = buttonSignOutDiv;

};
