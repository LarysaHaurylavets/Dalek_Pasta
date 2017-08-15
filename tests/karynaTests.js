'use strict';
var moment = require('moment');
var url = require('url');

var EC = protractor.ExpectedConditions;

var HomePage = require('../po/HomePage.js');
var main = new HomePage();

var PastiesPage = require('../po/pastiesPage.js');
var pastiesPage = new PastiesPage();

const PastiePage = require('../po/pastiePage');
var pastiePage = new PastiePage();

describe('expiration date', () => {

    var ID,
        actualExpDate,
        expectedExpDate;

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
        main.visit();
    });

    it('should display expiration date for 10min', () => {
        main.setExpirationDate('10min')
            .then(() => main.setDescription('new'))
            .then(() => main.uploadUI('txt'))
            .then(() => {
                expectedExpDate = moment().add(10, 'm').format('DD-MM-YYYY h:mm');
                main.header.clickPasties();
                browser.sleep(3000);
                return main.getUrl();
            }).then((urlString) => {
                ID = url.parse(urlString).pathname.split("/").pop();
                browser.sleep(3000);
                return pastiesPage.getExp(ID);
            }).then((act) => {
                expect(act).toContain(expectedExpDate);
            });

    //     main.getUrl().then((urlString) => {
    //         ID = url.parse(urlString).pathname.split("/").pop();
    //         pastiePage.header.clickPasties();
    //         return browser.sleep(3000);
    //    }).then(() => pastiesPage.getExp(ID))
    //    .then((act) => {
    //        expect(act).toContain(expectedExpDate);
    //    });
    // main.header.clickPasties();
    // browser.sleep(3000);
    // pastiesPage.getExp('2emzt7ki').then((text) => expect(text).toContain('15-08-2017 11:23'));

    });
});
