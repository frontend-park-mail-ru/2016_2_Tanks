'use strict';
// node_modules/technolibs/index.js

const technolibs = {
	onMessage (cb, offset = 10) {
		const config = {
			apiKey: "AIzaSyDDGWhW2CTwigQzNP1U0g4mo1YPieY7El0",
			authDomain: "technofront-f958d.firebaseapp.com",
			databaseURL: "https://technofront-f958d.firebaseio.com",
			storageBucket: "technofront-f958d.appspot.com",
		};

		Promise.resolve().then(() => {
			return include('https://www.gstatic.com/firebasejs/3.3.0/firebase.js');
		}).then(() => {
			return include('https://www.gstatic.com/firebasejs/3.3.0/firebase-app.js');
		}).then(() => {
			return include('https://www.gstatic.com/firebasejs/3.3.0/firebase-auth.js');
		}).then(() => {
			return include('https://www.gstatic.com/firebasejs/3.3.0/firebase-database.js');
		}).then(() => {
			firebase.initializeApp(config);
			let studentsRef = firebase.database().ref('messages');

			studentsRef.orderByChild('time').limitToLast(offset).on('value', snapshot => {
				cb(snapshot.val());
			});
		});
	},

	request (url, data) {
		let xhr = new XMLHttpRequest();

		xhr.open('POST', url, false);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(data));

		return xhr.responseText;
	},

	publish (data = {}) {
		let body = Object.assign({
			time: Date.now()
		}, data);

		return new Promise((resolve, reject) => {
			require('request').post('https://technofront-f958d.firebaseio.com/messages.json',
			{
				form: JSON.stringify(body)
			},
			(err, httpResponse, body) => {
				if (err) {
					return reject(err);
				}

				resolve(body);
			});
		}).catch(err => console.log(err));
	},

	colorHash (str) {
		function hashCode (str) {
		    let hash = 0;
		    for (let i = 0; i < str.length; i++) {
		       hash = str.charCodeAt(i) + ((hash << 5) - hash);
		    }
		    return hash;
		}

		function intToRGB (i) {
		    let c = (i & 0x00FFFFFF)
		        .toString(16)
		        .toUpperCase();

		    return '00000'.substring(0, 6 - c.length) + c;
		}

		return intToRGB(hashCode(str));
	}
};

function include(filename) {
	return new Promise(resolve => {
		let head = document.getElementsByTagName('head')[0];

		let script = document.createElement('script');
		script.onload = resolve;
		script.src = filename;
		script.type = 'text/javascript';

		head.appendChild(script);
	})
}

if (typeof exports === 'object') {
	module.exports = technolibs;
}
