'use strict';
var moment = require('moment');
var url = require('url');

var HomePage = require('../po/HomePage.js');
var main = new HomePage();

var PastiesPage = require('../po/pastiesPage.js');
var pastiesPage = new PastiesPage();

const PastiePage = require('../po/pastiePage');
var pastiePage = new PastiePage();

var exec = require('child_process').execFile;

describe('expiration date', () => {

    var ID,
        expectedExpDate,
        nowDate;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        login();
        // main.login()
        .then(function (result) {
          console.log("LOGIN RESULT:", result);
        });
    });

    afterEach(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
        main.visit();
    });

    function login() {
      return new Promise(function (resolve, reject) {

      console.log("LOGIN FUNCTION!");
        // browser.driver.switchTo().activeElement();
        browser.sleep(2000);
       exec('./support/exe/login.exe', function(err, data) {
           console.log(err);
           console.log(data.toString());
       });
       browser.sleep(5000);
       resolve("LOGIN FINISHSHSHHFDF");
     });
    }

  //   fit('should show an alert with defined text for invalid-size img', (done) => {
  //     console.log("LOGIN FUNCTION!");
  //       // browser.driver.switchTo().activeElement();
  //       browser.sleep(2000);
  //      exec('./support/exe/login.exe', function(err, data) {
  //          console.log(err);
  //          console.log(data.toString());
  //      });
  //      browser.sleep(5000);
  //      done();
  //  }, 100000);

    fit('should display expiration date for 10min', () => {
        main.setExpirationDate('10min')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(10, 'm').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 10min = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 1d', () => {
        main.setExpirationDate('1d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(1, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 1d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 3d', () => {
        main.setExpirationDate('3d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(3, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 3d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 7d', () => {
        main.setExpirationDate('7d')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(7, 'd').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 7d = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 2w', () => {
        main.setExpirationDate('2w')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(2, 'w').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 2w = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });

    it('should display expiration date for 1month', () => {
        main.setExpirationDate('1mnth')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => main.shareGo())
            .then(() => {
                nowDate = moment().format('DD-MM-YYYY h:mm');
                expectedExpDate = moment().add(1, 'M').format('DD-MM-YYYY h:mm');
                browser.sleep(1000);
                return pastiePage.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                return pastiePage.header.clickPasties();
            }).then(() => {
                browser.sleep(1000);
                return pastiesPage.getExp(ID);
            }).then((actualExpDate) => {
                expect(actualExpDate).toContain(expectedExpDate,`test execution date ${nowDate} + 1month = ${expectedExpDate}, but recieved expiration for pastie with ID ${ID} is ${actualExpDate}`);
            });
    });
});
