'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

xdescribe('invalid files tests', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(() => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    afterEach(()=>{

    });

    it('should show an alert with defined text for img', () => {
        main.uploadUI('invalid-pic');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeImgText);
    });

    it('should show an alert with defined text gor txt', () => {
        main.uploadUI('invalid-txt');
        expect(main.invalidSizeAlert.isPresent()).toBe(true);
        expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeTxtText);
    });

});
