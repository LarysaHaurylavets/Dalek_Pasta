'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('upload valid video', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(() => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    it('should upload a video', () => {
        main.uploadUI('video');
        expect(main.shareButton.isPresent()).toBe(true);
        // expect(main.invalidSizeAlert.getText()).toEqual(main.invalidSizeImgText);
    });
});
