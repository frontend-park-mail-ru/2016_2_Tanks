(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;

	class SignInView extends View {
		constructor(options = {}) {
			super(options);
			let allPages = document.querySelector('.js-allforms');

			let signInPage = document.createElement('div');
			signInPage.classList.add('js-signin');

			allPages.appendChild(signInPage);

			this._el = document.querySelector('.js-allforms').querySelector(".js-signin");
			this.hide();


			let signInForm = new Form({
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
							text: 'Sign In',
							attrs: {
								type: 'submit'
							}
						}
					]
				}
			});

			signInPage.appendChild(signInForm.el);

			allPages.signInForm = signInForm;
			allPages.signInPage = signInPage;

			let backButton = new Button({
				text: 'back',
				attrs: {
					type: 'click'
				}
			}).render();
			backButton.on('click', event => {
				event.preventDefault();
				this.router.back();
			});
			signInPage.appendChild(backButton.el);

			signInForm.on('submit', event => {
				event.preventDefault();

				let isGoodSingIn = initSignin(signInForm.getFormData());
				if(isGoodSingIn){
					window.user.online = true;
					this.router.go('/login');
				}
				else {
					alert("this wrong password");
				}
			});

		}


		init(options = {}) {
			this.show();
		}

		resume(options = {}) {
			if(window.user.online)
				this.router.go('/login');
			else {
				this.show();
			}
		}
	}


	// export
	window.SignInView = SignInView;

})();
