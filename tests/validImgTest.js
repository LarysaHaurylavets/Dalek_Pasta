'use strict';

var EC = protractor.ExpectedConditions;
var HomePage=require('../po/homePage.js');
var main = new HomePage();


describe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        browser.sleep(1000);
    });

  

    it('should open main page', function(){        
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
             
    }); 

    it('should upload valid image file', function(){         
        main.uploadUI('pic');
        expect(main.shareButton.isPresent()).toBe(true);

    }); 


});
