function detectSession(user, allPages) {
    'use strict';
    let xhr = sendRequest('GET', 'session');

    if (xhr.status === 401) {

      startPage(user, allPages);
    }
    else {
        let responseDataFields = JSON.parse(xhr.response);
        user.login = responseDataFields['login'];
        user.email = responseDataFields['email'];

        mainPage(user, allPages);
    }
}



function initSignUp(user, allPages) {
    'use strict';
    let formData = allPages.formSignUp.getFormData();

    let xhr = sendRequest('POST', 'user', formData);

    if (xhr.status === 200) {
        user.login = formData['login'];
        user.email = formData['email'];
        user.password = formData['password'];

        mainPage(user, allPages);
    }
    else {
        alert("this login is already used");
    }
}



function initSignIn(user, allPages) {
    'use strict';

    let formData = allPages.formSignIn.getFormData();
    user.login = formData['login'];
    user.password = formData['password'];

    let xhr = sendRequest('POST', 'session', formData);

    let responseDataFields = JSON.parse(xhr.response);
    user.email = responseDataFields['email'];

    if (xhr.status === 200) {
        mainPage(user, allPages);
    }
    else {
        alert("wrong password");
    }
}



function initSignOut(user, allPages) {
    'use strict';

    let xhr = sendRequest('DELETE', 'session');

    if (xhr.status != 403)
        alert(`by, ${user.login}`);
        startPage(user, allPages);
}



function sendRequest(method, url, object) {
    'use strict';

    let xhr = new XMLHttpRequest();
    xhr.open(method, addressHost + 'api/'+url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(object));

    return xhr;
}



////////////////////////////////////////
function parseJSON(data) {
    'use strict';
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
