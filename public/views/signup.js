(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;

	class SignUpView extends View {
		constructor(options = {}) {
			super(options);
			let allPages = document.querySelector('.js-allforms');

			let signUpPage = document.createElement('div');
			signUpPage.classList.add('js-signup');

			allPages.appendChild(signUpPage);

			this._el = document.querySelector('.js-allforms').querySelector(".js-signup");
			this.hide();


			let signUpForm = new Form({
				el: document.createElement('div'),
				data: {
					title: 'Hi! Please signup',
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

			signUpPage.appendChild(signUpForm.el);

			allPages.signUpForm = signUpForm;
			allPages.signUpPage = signUpPage;

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
			signUpPage.appendChild(backButton.el);

			signUpForm.on('submit', event => {
				event.preventDefault();

				let isGoodSingUp = initSignup(signUpForm.getFormData());
				if(isGoodSingUp){
					window.user.online = true;
					this.router.go('/login');
				}
				else {
					alert("this login is zanet");
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
	window.SignUpView = SignUpView;

})();
