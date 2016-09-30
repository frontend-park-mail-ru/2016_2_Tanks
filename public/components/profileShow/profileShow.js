(function () {
    'use strict';

    // import

    class ProfileShow {

        constructor (options = { data: {"title":"none"} }) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render () {
            this._updateHtml()
            this._installControls();
        }

        /**
         * Вернуть поля формы
         * @return {string}
         */
        _getFields () {
            let { fields = [] } = this.data;

            return fields.map(field => {
                return `<input type="${field.type}" name="${field.name}">`
            }).join(' ')
        }

        _updateHtml () {
            this.el.innerHTML = `
				<form>
					<h1>Hi, ${this.data.title}</h1>
					<div>
						${this._getFields()}
					</div>
					<div class="js-controls">
					</div>
				<form>
			`;
        }

        _installControls () {
            let { controls = [] } = this.data;

            controls.forEach(data => {
                let control = new Button({text: data.text}).render();
                this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        /**
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */
        on (type, callback) {
            this.el.addEventListener(type, callback);
        }

    }

    //export
    window.ProfileShow = ProfileShow;
})();
