'use strict';
var exec = require('child_process').execFile;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('login', () => {

    beforeAll(() => {

        //jasmine.DEFAULT_TIMEOUT_INTERVAL= 120000;
        main.visit();
    });

    it('should show an alert with defined text for invalid-size img', (done) => {
      console.log("LGOIN.JS");
        // browser.driver.switchTo().activeElement();
        browser.sleep(2000);
       exec('./support/exe/login.exe', function(err, data) {
           console.log(err);
           console.log(data.toString());
       });
       browser.sleep(1000);
       done();
   }, 100000);
});
