(function () {
    'use strict';

    if (typeof window === 'object') {

        let user = {login: "", email: "", password: ""};

        let addressHost = "http://javaprodaction.herokuapp.com/";
        //let addressHost = "http://localhost:8080/";
        window.addressHost = addressHost;

        let Button = window.Button;
        let Form = window.Form;

        let allPages = document.querySelector('.js-allforms');
        startInit(allPages);

        detectSession(user, allPages);

        allPages.formLogin.on('submit', event => {
            event.preventDefault();

            initLogin(user, allPages);

        });

        allPages.formSignin.on('submit', event => {
            event.preventDefault();

            initSignin(user, allPages);
        });

        allPages.formLogout.on('submit', event=> {
            event.preventDefault();

            initLogout(user, allPages);
        });

        allPages.formDelUser.on('submit', event=> {
            event.preventDefault();

            initDelUser(user, allPages);
        });
    }
})();

