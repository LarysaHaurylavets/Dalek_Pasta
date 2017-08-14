'use strict';
var moment = require('moment');
var url = require('url');

var EC = protractor.ExpectedConditions;

var HomePage = require('../po/HomePage.js');
var main = new HomePage();

<<<<<<< HEAD
var PastiesPage = require('../po/pastiesPage.js');
var pastiesPage = new PastiesPage();

describe('epiration date tests', () => {
=======
xdescribe('epiration date tests', () => {
>>>>>>> 03cfe573c2759fa3e3e99d87d3fa7b9e8ffdbfd1

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
<<<<<<< HEAD
=======
    });

    xit('should open the main page', () => {

>>>>>>> 03cfe573c2759fa3e3e99d87d3fa7b9e8ffdbfd1
        main.visit();
    });

    it('should display expiration date for 10min', () => {
        main.setExpirationDate('10min');
        main.setDescription('ugh');
        main.uploadUI('txt');
        var ID;
        main.getUrl().then((urlString) => {
            ID = url.parse(urlString).pathname.split("/").pop();
        });
        var expectedExpDate = moment().add(10, 'm').format('DD-MM-YYYY h:mm');
        main.header.clickPasties();
        var actualExpDate = pastiesPage.getExp(ID);
        expect(actualExpDate).toContain(expectedExpDate);
    });
});
