(function () {
    'use strict';

    if (typeof window === 'object') {

        let user = {};
        window.user = user;

        let addressHost = "http://javaprodaction.herokuapp.com/";
        //let addressHost = "http://localhost:8080/";
        window.addressHost = addressHost;

        const Router = window.Router;
        const StartView = window.StartView;
        const SignInView = window.SignInView;
        const SignUpView = window.SignUpView;
        const LoginView = window.LoginView;
        const MainView = window.MainView;
        /*
         let allPages = document.querySelector('.js-allforms');
         startInit(allPages);

         detectSession(user, allPages);*/

        //(new Router)
        window.user = detectSession();
        (new Router)
            .addRoute('/start', StartView)
            .addRoute('/login', LoginView)
            .addRoute('/signup', SignUpView)
            .addRoute('/signin', SignInView)
            .addRoute('/', MainView)
            .start();

        /*
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
         });*/
    }
})();

