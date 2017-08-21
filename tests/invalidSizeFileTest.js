'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('invalid files tests', () => {

    beforeAll((done) => {
        browser.waitForAngularEnabled(false);
        console.log("!!!!!!! BEFORE ALL VISIT called");
        main.visit();
        browser.sleep(5000);
        main.login(done);
        console.log("!!!!!!! BEFORE ALL LOGIN end");
        browser.sleep(10000);
    }, 60000);

    beforeEach(() => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    it('should show an alert with defined text for invalid-size img', () => {
        main.uploadUI('invalid-pic');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeImgText);
    });

    it('should show an alert with defined text for invalid-size txt', () => {
        main.uploadUI('invalid-txt');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeTxtText);
    });

});
