(function () {
    'use strict';

    var setUserName = function () {
        var loggedUserNameElement = document.getElementsBySelector('div.login a.model-link b')[0];
        var userParameterNameElement = document.getElementsBySelector('td input[value=username]')[0];
        var userParameterValueElement = userParameterNameElement && userParameterNameElement.nextElementSibling;

        if (loggedUserNameElement && userParameterValueElement) {
            userParameterValueElement.value = loggedUserNameElement.innerText;
            userParameterValueElement.readOnly = true;
        }
    };

    var oldOnload = window.onload;

    window.onload = function () {
        if (oldOnload) {
            oldOnload();
        }

        setUserName();
    };
}());