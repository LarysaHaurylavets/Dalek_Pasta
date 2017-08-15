'use strict';

var EC = protractor.ExpectedConditions;
var HomePage=require('../po/homePage.js');
var PastiePage=require('../po/pastiePage.js');
var main = new HomePage();
var pastiePage = new PastiePage();
var ImagePage = require('../po/imagePage.js');
var imgPage = new ImagePage();
var compare = require('../support/fileComparator.js');
var helper = require('../support/Helper.js')

describe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    afterEach(() => {
        browser.sleep(2000);
    });

    it('should upload valid image file', function() {
        main.uploadUI('pic');
		helper.waitForVisible(main.shareButton)
			.then(() => {
				expect(main.shareButton.isPresent()).toBe(true);
			})
    });

    it('should set description for image file', function() {
        main.setDescription("Image file");
        expect(pastiePage.getDescText()).toEqual('Image file');
    });

    it('should share valid image file', function() {
    	main.shareButton.click();
		helper.waitForClickable(pastiePage.copyButton).then(() => {
    		expect(pastiePage.copyButton.isPresent()).toBe(true);
    	})
    });

    it('should show the preview', () => {
      expect(imgPage.bigImageIsVisible()).toBeFalsy();

      imgPage.showPreview();
      expect(imgPage.bigImageIsVisible()).toBeTruthy();

      imgPage.closePreview();
      expect(imgPage.bigImageIsVisible()).toBeFalsy();
    });


    it('should provide the same quality images as uploaded one', function () {
      // download uploaded image
      imgPage.saveIMG()
        .then(function (msg) {
          console.log("image:", msg);
           helper.pauseFor(3000)
          
         .then(() => {
          var comparisonResult = compare('./filesToUpload/pic_downloaded.jpg', './filesToUpload/pic.jpg');
          expect(comparisonResult).toBeTruthy();
        })
       });
    });

});
