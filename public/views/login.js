(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;

	class LoginView extends View {
		constructor(options = {}) {
			super(options);
			let allPages = document.querySelector('.js-allforms');

			let LoginPage = document.createElement('div');
			LoginPage.classList.add('js-login');

			allPages.appendChild(LoginPage);

			this._el = document.querySelector('.js-allforms').querySelector(".js-login");
			this.hide();

			let LoginForm = new Form({
				el: document.createElement('div'),
				data: {}
			});

            let playButton = new Button({
                className: 'play_button',
                text: 'play',
                attrs: {
                    type: 'click'
                }
            }).render();

            let playWithFreindsButton = new Button({
                text: 'play with friends',
                attrs: {
                    type: 'click'
                }
            }).render();

            let leaderBoardButton = new Button({
                text: 'leaderboard',
                attrs: {
                    type: 'click'
                }
            }).render();

            let logOutButton = new Button({
                text: 'logout',
                attrs: {
                    type: 'click'
                }
            }).render();

            let deleteButton = new Button({
                text: 'delete',
                attrs: {
                    type: 'click'
                }
            }).render();

            LoginPage.appendChild(LoginForm.el);
            LoginPage.appendChild(playButton.el);
            LoginPage.appendChild(playWithFreindsButton.el);
            LoginPage.appendChild(leaderBoardButton.el);
            LoginPage.appendChild(logOutButton.el);
            LoginPage.appendChild(deleteButton.el);

            allPages.deleteButton = deleteButton;
            allPages.logOutButton = logOutButton;
            allPages.leaderBoardButton = leaderBoardButton;
            allPages.playWithFreindsButton = playWithFreindsButton;
            allPages.playButton = playButton;
			allPages.LoginForm = LoginForm;
			allPages.LoginPage = LoginPage;

            logOutButton.on('click', event => {
                event.preventDefault();
                let isGoodLogaut = initLogout();
                if (isGoodLogaut){
                    window.user.online = false;
                    alert(`by, ${window.user.login}`);
                    this.router.go('/');
                }
            });

            deleteButton.on('click', event => {
                event.preventDefault();
                let isGoodDelete = initDelUser();
                if (isGoodDelete){
                    window.user.online = false;
                    alert(`by, ${window.user.login}, you are deleted`);
                    this.router.go('/');
                }
            });
		}

		resume(options = {}) {
            if (!window.user.online) {
                this.router.go('/');
            }
			else {
                document.querySelector('.js-allforms').LoginForm.reFill({
                    data:{
                        title: `Hi, ${window.user.login} your email ${window.user.email}`
                    }
                    });
                this.show();
            }
		}
	}


	// export
	window.LoginView = LoginView;

})();
