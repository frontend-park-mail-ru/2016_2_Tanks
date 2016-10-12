function detectSession(user, allPages) {
    'use strict';
    let xhr = sendRequest('GET', 'session');


    if (xhr.status === 401) {
        allPages.loginPage.hidden = false;
        allPages.signinPage.hidden = false;
    }
    else {
        let responseDataFields = JSON.parse(xhr.response);
        user.login = responseDataFields['login'];
        user.email = responseDataFields['email'];

        initLogoutandUserDelPage(user, allPages);
    }
}

function initLogin(user, allPages) {
    let formData = allPages.formLogin.getFormData();

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

    allPages.loginPage.hidden = true;
    allPages.signinPage.hidden = true;
    allPages.logoutPage.hidden = false;
    allPages.delUserPage.hidden = false;

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

function initSignin(user, allPages) {
    'use strict';

    let formData = allPages.formSignin.getFormData();
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

    allPages.logoutPage.hidden = true;
    allPages.delUserPage.hidden = true;
    allPages.loginPage.hidden = false;
    allPages.signinPage.hidden = false;

    let xhr = sendRequest('DELETE', 'session');

    if (xhr.status != 403)
        alert(`by, ${user.login}`);
}

function initDelUser(user, allPages) {
    'use strict';

    allPages.logoutPage.hidden = true;
    allPages.delUserPage.hidden = true;
    allPages.loginPage.hidden = false;
    allPages.signinPage.hidden = false;

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