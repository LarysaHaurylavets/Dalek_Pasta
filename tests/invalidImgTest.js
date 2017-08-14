'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('invalid files tests', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
    });

    it('should show an alert', () => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');

        // main.setExpirationDate('2w');
        // main.setDescription('test');
        main.uploadUI('invalid-pic');
    });
});
