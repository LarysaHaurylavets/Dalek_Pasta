'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('epiration date tests', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
    });

    it('should open the main page', () => {

        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');

        main.setExpirationDate('10min');
        main.setDescription('ugh');
        main.uploadUI('pic');
    });
});
