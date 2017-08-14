'use strict';

var EC = protractor.ExpectedConditions;
var BasePage = require('../po/BasePage');
var HomePage = require('../po/HomePage.js');

describe('epiration date tests', () => {

    beforeAll(() => {
        console.log("beforeAll");
        browser.waitForAngularEnabled(false);
        //browser.get('https://pasta.lab.epam.com/');
    });

    afterAll(() => {
        browser.sleep(3000);
    });

    beforeEach(() => {
        //console.log("before each");
    });

    it('should open the main page', () => {
        var main = new HomePage();
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');

        main.setExpirationDate('10min');

        // main.getHeader().clickPasties();
        // browser.sleep(1000);
        // expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');

        // main.getHeader().clickLogo();
        // browser.sleep(1000);
        // expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');


    });
});