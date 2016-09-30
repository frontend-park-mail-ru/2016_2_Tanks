(function () {
	'use strict';

	class Button {
		constructor (options={className:"",text:""}) {
			this.className = options.className;
			this.text = options.text;
			this.attrs = options.attrs || [];
			this.el = document.createElement('button');
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
		
		toString () {
			return this.el.outerHTML;
		}
	}

	//export
	window.Button = Button;

})();
