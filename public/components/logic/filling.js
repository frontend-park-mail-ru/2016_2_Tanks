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

        initLogoutandUserDelPage(user, allPages);
    }
}

function initSignUp(user, allPages) {
    let formData = allPages.formSignUp.getFormData();

    let xhr = sendRequest('POST', 'user', formData);

    if (xhr.status === 200) {
        user.login = formData['login'];
        user.email = formData['email'];
        user.password = formData['password'];

        initLogoutandUserDelPage(user, allPages);
    }
    else {
        alert("this login is zanet");
    }
}

function initLogoutandUserDelPage(user, allPages) {
    'use strict';

    allPages.signUpDiv.hidden = true;
    allPages.signInDiv.hidden = true;
    allPages.logoutDiv.hidden = false;
    allPages.delUserDiv.hidden = false;

    allPages.formLogout.reFill({
        data: {
            title: 'Hi! ' + user.login,
            fields: [
                {
                    text: user.email
                }
            ]
        }
    });
    allPages.formDelUser.reFill({
        data: {
            title: 'Hi! ' + user.login,
            fields: [
                {
                    text: user.email
                }
            ]
        }
    });
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
        initLogoutandUserDelPage(user, allPages);
    }
    else {
        alert("wrong password");
    }
}

function initLogout(user, allPages) {
    'use strict';

    allPages.logoutDiv.hidden = true;
    allPages.delUserDiv.hidden = true;
    allPages.signUpDiv.hidden = false;
    allPages.signInDiv.hidden = false;

    let xhr = sendRequest('DELETE', 'session');

    if (xhr.status != 403)
        alert(`by, ${user.login}`);
}

function initDelUser(user, allPages) {
    'use strict';

    allPages.logoutDiv.hidden = true;
    allPages.delUserDiv.hidden = true;
    allPages.signUpDiv.hidden = false;
    allPages.signInDiv.hidden = false;

    let xhr = sendRequest('DELETE', 'user');

    if (xhr.status != 403)
        alert(`by, ${user.login} you are deleted`);
}

function sendRequest(method, url, object) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, addressHost + 'api/'+url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(object));

    return xhr;
}


function startPage (user, allPages) {

    allPages.buttonPlayDiv.hidden = false;
    allPages.buttonSignInDiv.hidden = false;
    allPages.buttonSignUpDiv.hidden = false;
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
