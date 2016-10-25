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
		}

		resume(options = {}) {/*
			if (!options.username && !options.email) {
				return this.router.go('/');
			}*/

			// TODO: дописать реализацию

			this.show();
		}
	}


	// export
	window.SignInView = SignInView;

})();
