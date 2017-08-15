'use strict';

var EC = protractor.ExpectedConditions;
var HomePage=require('../po/homePage.js');
var PastiePage=require('../po/pastiePage.js');
var helper = require('../support/Helper.js');
var main = new HomePage();
var pastiePage = new PastiePage();

xdescribe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });   

    afterEach(() => {
        browser.sleep(2000);
    });  

    it('should upload valid image file', function(){   
        main.setExpirationDate('10min');      
        main.uploadUI('pic');
        expect(main.shareButton.isPresent()).toBe(true);

    }); 

    it('should set description for image file', function(){                  
        main.setDescription("Image file");
        expect(pastiePage.getDescText()).toEqual('Image file'); 
    }); 

    it('should share valid image file', function(){                  
       main.shareButton.click(); 
       helper.waitForClickable(pastiePage.copyButton, 5000);
       expect(pastiePage.copyButton.isPresent()).toBe(true);        
    }); 
});



