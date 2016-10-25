function detectSession() {
    'use strict';
    let xhr = sendRequest('GET', 'session');

    if (xhr === null)
        alert("sorry, server error");

    window.user={online:false};

    if (xhr.status === 401) {
        return window.user;
    }
    else {
        let responseDataFields = JSON.parse(xhr.response);
        window.user.login = responseDataFields['login'];
        window.user.email = responseDataFields['email'];
        window.user.online = true;

        return window.user;
    }
}

function initSignin(formData) {
    'use strict';

    user.login = formData['login'];
    user.password = formData['password'];

    let xhr = sendRequest('POST', 'session', formData);

    let responseDataFields = JSON.parse(xhr.response);
    user.email = responseDataFields['email'];

    console.log(responseDataFields);
    if (xhr.status === 200)
        return true;
    else
        return false;
}
function initSignup(formData) {
    'use strict';

    let xhr = sendRequest('POST', 'user', formData);

    if (xhr.status === 200) {
        user.login = formData['login'];
        user.email = formData['email'];
        user.password = formData['password'];

        return true;
    }
    else
        return false;
}

function initLogout() {
    'use strict';

    let xhr = sendRequest('DELETE', 'session');

    if (xhr.status === 200)
        return true;
    else
        return false;
}

function initDelUser() {
    'use strict';

    let xhr = sendRequest('DELETE', 'user');

    if (xhr.status === 200)
        return true;
    else
        return false;
}

function sendRequest(method, url, object) {
    let TIME_OUT = 5000;

    let xhr = new XMLHttpRequest();

    let message = createLoadingMessage(document.querySelector('.js-allforms'), 'Loading...');

    xhr.onreadystatechange = function () {
        document.body.appendChild(message);
        if (xhr.readyState === 4)
            document.body.removeChild(message);
    };

    xhr.open(method, addressHost + 'api/'+url, false);
    //xhr.timeout = TIME_OUT;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;

    xhr.ontimeout = function (e) {
        alert("sorry, server sleep");
    };

    xhr.send(JSON.stringify(object));

    return xhr;
}

function createLoadingMessage(elem, text) {
    let coords = elem.getBoundingClientRect();

    let message = document.createElement('div');
    message.style.cssText = "position:fixed; color: red";

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = text;

    return message;
}

////////////////////////////////////////
function parseJSON(data) {
    let dataFields = [];
    if (!data)
        return [];
    Object.keys(data).forEach(element => {
        if (!element) {
            return;
        }
        dataFields.push({
            text: element + ' : ' + JSON.stringify(dataFields[element])
        });
    });
    return dataFields;
}