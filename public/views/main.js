(function () {
	'use strict';

	const View = window.View;

	class MainView extends View {
		constructor(options = {}) {
			super(options);

			let allPages = document.querySelector('.js-allforms');

			let mainPage = document.createElement('div');
			mainPage.classList.add('js-main');

			allPages.appendChild(mainPage);

			this._el = document.querySelector('.js-allforms').querySelector(".js-main");
			allPages.mainPage = mainPage;
		}

		resume(options = {}) {
			if(window.user.online)
				this.router.go('/login');
			else {
				this.router.go('/start');
			}
			this.remove();
		}
	}


	// export
	window.MainView = MainView;

})();
