'use strict';

var EC = protractor.ExpectedConditions;
var PastiePage = require('../po/pastiePage.js');
var HomePage=require('../po/homePage.js');
var helper = require('../support/Helper.js');
var page = new PastiePage();
var main = new HomePage();


xdescribe('check contain on pastie page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

   
    it('should open the pastie page', () => {
        page.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/j7ythffq');

    });

    it('should check link on pastie page', function(){
         // page.getLinkField().then((text)=>{
         //    console.log('Link field contains: ' + text);
           
         // });
         expect(page.getLinkField()).toEqual('https://pasta.lab.epam.com/pasties/j7ythffq');       
    });

    it('should check describe on pastie page', function(){        
    
        // page.getDescText().then((value)=>{
        //     console.log('Describe field contains: ' + value);

        // });
        expect(page.getDescText()).toEqual('Description');      
    }); 


    it('should check button copy on pastie page', function(){
        page.clickCopyButton();
        // page.getLinkCopyButton().then((value)=>{
        //     console.log('Button copy contains link: ' + value);
        // });
        expect(page.getLinkCopyButton()).toEqual('https://pasta.lab.epam.com/pasties/j7ythffq');
        
    });

    

});
