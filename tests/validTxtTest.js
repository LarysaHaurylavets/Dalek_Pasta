'use strict';

var EC = protractor.ExpectedConditions;
var HomePage=require('../po/homePage.js');
var PastiePage=require('../po/pastiePage.js');
var PastiesPage=require('../po/pastiesPage.js');
var CodePage = require('../po/codePage.js');
var main = new HomePage();
var pastiePage = new PastiePage();
var pastiesPage = new PastiesPage();
var codePage = new CodePage();


xdescribe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    afterEach(() => {
        browser.sleep(1000);
    });  

    it('should upload valid txt file', function(){   
        main.setExpirationDate('10min');
        main.uploadUI('txt');       
        expect(main.shareButton.isPresent()).toBe(true);        
    });     

    it('should set description for txt file', function(){   
        main.setDescription("Txt file");  
        expect(pastiePage.getDescText()).toEqual('Txt file');  
    }); 

    it('should share valid txt file', function(){          
        main.shareButton.click();
        browser.wait(EC.elementToBeClickable(pastiePage.copyButton), 5000).then(()=>{
            expect(pastiePage.copyButton.isPresent()).toBe(true);
        });  


        browser.wait(EC.elementToBeClickable(pastiePage.syntaxLabel), 5000).then(()=>{
            expect(codePage.syntaxLabel.isPresent()).toBe(true);  
        })        
       
    }); 

});

  
