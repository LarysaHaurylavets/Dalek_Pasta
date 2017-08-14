'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('upload valid video', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    it('should upload a video', () => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
        main.uploadUI('video');
        expect(main.shareButton.isPresent()).toBe(true);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
        main.shareButton.click();
        browser.sleep(2000);    
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
    });

});
