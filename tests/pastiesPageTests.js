'use strict';

var EC = protractor.ExpectedConditions;
var PastiePage = require('../po/pastiePage.js');
var PastiesPage = require('../po/pastiesPage.js');
var HomePage=require('../po/homePage.js');
var helper = require('../support/Helper.js');
var header = require('../po/ui/Header.js');
var page = new PastiePage();
var main = new HomePage();
var pastiesPage = new PastiesPage();
var ID = pastiesPage.pastiesID.first();


describe('check contain on pasties page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);        
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

    it('should open the main page', () => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });
   
    it('should open the pasties page', () => {
        header.clickPasties();
        helper.pauseFor(1000);
        helper.waitForVisible(pastiesPage.prevPageButton);
        helper.waitForClickable(pastiesPage.nextPageButton);
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');
        expect(pastiesPage.getPastiesAmount()).toBe(10);  
    });


    it('should check ID sharing file', () => {        
        pastiesPage.pastiesID.first().getText().then((id)=>{
            pastiesPage.choosePastie(id);
        });               
    });

});



