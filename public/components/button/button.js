(function () {
	'use strict';

	class Button {
		constructor (options={}) {

			this.attrs = options.attrs || [];
			this.el = document.createElement('button');
			this.el.className = options.className;
			this.el.innerHTML = options.text;
		}

		setAttrs (attrs) {
			Object.keys(attrs).forEach(name => {
				this.el.setAttribute(name, attrs[name]);
			})
		}

		render () {
			if(this.className!=null)
				this.el.classList.add(this.className);
			this.el.innerHTML = this.text;
			this.el.classList.add('button');
			this.setAttrs(this.attrs);
			return this;
		}

/*
		on(type, callback) {
			//this.el.querySelector('button').addEventListener(type, callback, false);
			console.log("ok")
			this.el.addEventListener(type, callback, false);
		}
*/

		toString () {
			return this.el.outerHTML;
		}
	}

	//export
	window.Button = Button;

})();
