'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();
var PastiePage = require('../po/pastiePage.js');
var page = new PastiePage();

xdescribe('upload valid video', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    });
    beforeEach(() => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });
    it('should upload a video', () => {
        main.uploadUI('video');
        browser.wait(EC.elementToBeClickable(main.shareButton), 5000);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
        main.shareButton.click();
        browser.wait(EC.elementToBeClickable(page.copyButton), 5000);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
    });
});
