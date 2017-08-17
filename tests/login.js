'use strict';

var exec = require('child_process').execFile;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('login', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(() => {
        main.visit();
    });

    it('should show an alert with defined text for invalid-size img', () => {
        browser.sleep(1000);
        var user = browser.params.user;
        var pass = browser.params.pass;
       exec('./tests/login.exe', [user, pass], function(err, data) {
           console.log(err);
           console.log(data.toString());
       });
    console.log(user, pass);
       browser.sleep(15000);
    });

});
