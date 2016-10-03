(function () {
    'use strict';

    var setUserName = function () {
        var loggedUserNameElement = document.getElementsBySelector('div.login a.model-link b')[0];
        var userParameterNameElement = document.getElementsBySelector('td input[value=username]')[0];
        var userParameterValueElement = userParameterNameElement && userParameterNameElement.nextElementSibling;
        var username, pageBody, funnyHeader;

        if (loggedUserNameElement) {
            username = loggedUserNameElement.innerText;
            pageBody = document.getElementById('page-body');

            if (userParameterValueElement) {
                userParameterValueElement.value = username;
                userParameterValueElement.readOnly = true;
            }

            if (pageBody) {
                funnyHeader = document.createElement('div');

                switch (username.toLowerCase()) {
                    case 'Maksim-Bartoshyk':
                        funnyHeader.style.height = '40px';
                        funnyHeader.style.background = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAQ7SURBVFhH7dhbqBVVGMDxY2rmrSzLu2laJKWSUaIhYl4RtCI06qFSSRRLsMQefAisIDWLtOjipfQpKgiqBxWxBJFE6UEoFSvCe1JmdPGe+v/j/mA5zd5n73FLPZwPfnBm9syatdes9X1rn4amaIraojM6Xfzz/xHNcDt6YwTO4jQG4xbciv8kOmAuduE8nsKTpb/1CJ4u/b0Tc3Atrng0x+M4guiMKnUwHMQkOOpXJK7GeziH9MGqpoP6B0vRAnUNv/UqZB8Yqu1gWIG6juQs5D0o1NpBzURdogf+Qt5DQpEOHkVdUtJi5D0gVaSDegmXFa3wC/IaTxXt4Pe4rAXTD668vMZT0/FEcmw6eSY5LucUuqBwjEFew1lvoRs+xoe4CZVWfeoeFI4Hkddo1gnMgKNhR60clry8a7PuR+EYjrxGdQZ/w/qb97n8zGu8Nu9z9Ufh6IW0cefjF3BkHakbcTMsf5vg53ZqAx6FKcpruuNhrEdaif7EDSgc4xEN+uDZaIdpWIO1sCpMRmt4/Th4zWNwHq7DB3ARec3zSNschkLh8t+G+LaLcD22J+dSP+JeDMXe0rmszWiD15NzG1Go7N2HSDF21G//eenYRbEHnjdPxoj4yqLqeM5dj9eY77zH85/A/Bpf1FEcgJrCb2TKiM7cAVepx762roi4BtbV6IDsqInbHVCE89EU5OdOkbthHvR4NWoKJ3aMxDJYM4/BEe2JvHAKRAdf9ERO3AVH9jeYK5fD639HW1QdU+GNNuS8e7t0LKtENtpjP+Iad9qObDamIK7xi/tlTUMemwmqDlOJNy1EXzhPouHv4BxKI0bPVxav7QWk4Zb/J0Q7dsz04wbW489QVbgYjsNh9zWsRDQanJ8xQg/BXOmi6Qh/2bmKT2IsDF+fHci28yb8weW1djhv1P8VUX/fgTfHiGR9CxeMjXv8KQwXmAnZc35R55mjnt4bYhDeLx2PRqPxMuzUbUgnfmN8VYYdjMlfjQUwzbh4yi2uS+IrmP39aeki8dXlNZzaAV+Pv4dNH9ehmvvMjwfgnP4SjnzF8GelOcx5FSt5C34u/Z3HdHQnRuI1vIohsKpU2tG46iNZW7et1YdxFcqGhX8fHI1v4M0+5DlEtUh5zvrs9dZjS5gmwJI2D9l74r75iI2IJbAlfoCLrGxY3vydMAhph1xtlqg4DpY+NwbmtGwH34Udd7pk7zML2GYcWwDcvfvsimVvIhxFH+iN5j+T7hJYqqwm0eghWGFewVZkO7gb5kKv8dXFfdZuz7klS38tvgH/zzMKZcOkbP38Gq6uPnBeRlhzbcxXY0pwx+Pe0F2xSXdgiTtrc+ADcFW7DYtkbzUxPG/y9ot9BBeVI272qBh2qNxEtfOOlnnNbX21noUdcKWWa9uVnK1QhcIR+gMm4Vr8ikZHp17hbsfVVgvLYFM0xaXR0HABuRQ7iyyYP2IAAAAASUVORK5CYII=") repeat-x';
                        break;
                }

                document.body.insertBefore(funnyHeader, pageBody);
            }
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
