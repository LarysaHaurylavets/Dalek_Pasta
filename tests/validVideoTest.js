'use strict';

var EC = protractor.ExpectedConditions;
var HomePage = require('../po/homePage.js');
var main = new HomePage();
var VideoPage = require('../po/videoPage.js');
var videoPg = new VideoPage();
var helper = require('../support/Helper.js');

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
        helper.waitForClickable(main.shareButton);
        main.shareButton.click();
        expect(videoPg.videoPlayer.isPresent()).toBe(true);
    });

    // FAILED because of invalidnyu videoPlayer
    xit('should download the video through Player', () => {
        main.uploadUI('video');
        expect(main.shareButton.isPresent()).toBe(true);
        expect(element(by.css('#VideoElement')).isPresent()).toBe(true);
        helper.waitForAndClick(main.shareButton);
        helper.waitForClickable(($('.info-bg')));
        let expTitle = main.getPageTitle();
        helper.hoverMouseOn(videoPg.videoPlayer);
        videoPg.downloadButtonInPlayer.click();
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual(expTitle);
    });
});
