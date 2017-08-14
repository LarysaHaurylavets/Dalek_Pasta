'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();
var PastiePage = require('../po/pastiePage.js');
var page = new PastiePage();

<<<<<<< HEAD
xdescribe('upload valid video', () => {
=======
xdescribe('valid video tests', () => {
>>>>>>> b6029cb631f3a343c445f6b8db8e926907c81aca

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
        expect(main.shareButton.isPresent()).toBe(true);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
        main.shareButton.click();
        browser.wait(EC.elementToBeClickable(page.copyButton), 5000);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
    });

    it('should download the video', () => {
        main.uploadUI('video');
        expect(main.shareButton.isPresent()).toBe(true);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
        browser.wait(EC.elementToBeClickable(main.shareButton), 5000);
        main.shareButton.click();
        browser.wait(EC.elementToBeClickable(($('.info-bg'))), 5000);
        let expTitle = main.getPageTitle();
        browser.actions().mouseMove(element(by.css('#VideoElement'))).perform();
        element(by.css('.fa-download')).click();
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual(expTitle);
    });
});
