(function () {
    'use strict';

    // import
    let Button = window.Button;

    class Form {
        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this._updateHtml();
            this._updateDataHtml();
            this._installControls();
        }

        reFill(options = {data: {}}) {
            this.data = options.data;

            this._updateDataHtml();
        }

        _getFields() {
            let {fields = []} = this.data;

            return fields.map(field => {
                (field.text == null) ? field.text = "" : true;
                if (!field.name || !field.type || !field.attrs)
                    return `<h4>${field.text}</h4>`;

                (field.attrs == null) ? field.attrs = "" : true;
                (field.type == null) ? field.type = "" : true;
                (field.name == null) ? field.name = "" : true;
                return `<input type="${field.type}" name="${field.name}" ${field.attrs}>${field.text}`
            }).join(' ')
        }

        _updateHtml() {
            this.el.innerHTML = `
				<form>
                    <div class="js-data">
				    </div>
				    <div class="js-controls">
				    </div>
				<form>
			`;
        }

        _updateDataHtml() {
            this.el.querySelector('.js-data').innerHTML = `
					<h1>${this.data.title}</h1>
					<div>
						${this._getFields()}
					</div>
			`;
        }

        _installControls() {
            let {controls = []} = this.data;

            controls.forEach(data => {
                let control = new Button({text: data.text, className: data.className}).render();
                this.el.querySelector('.js-controls').appendChild(control.el);
            });
        }

        on(type, callback) {
            //this.el.querySelector('button').addEventListener(type, callback, false);
            this.el.addEventListener(type, callback, false);
        }

        getFormData() {
            let form = this.el.querySelector('form');
            let elements = form.elements;
            let fields = {};

            Object.keys(elements).forEach(element => {
                let name = elements[element].name;
                let value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }

        getFormTitle() {
            return this.el.querySelector('form').title;
        }

    }

    //export
    window.Form = Form;
})();
