'use strict';
var exec = require('child_process').execFile;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('login', () => {

    beforeAll(() => {
        main.visit();
    });

    it('should show an alert with defined text for invalid-size img', () => {

        browser.driver.switchTo().activeElement();
        browser.sleep(2000);
       exec('./support/login.exe', function(err, data) {
           console.log(err);
           console.log(data.toString());
       });
       browser.sleep(10000);
    });
});
