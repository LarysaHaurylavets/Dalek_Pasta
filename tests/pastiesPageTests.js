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


describe('check contain on pasties page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });

    afterEach(() => {
        pauseFor(1000);
    });

   
    it('should open the pasties page', () => {
        header.clickPasties();
        expect(browser.getCurrentUrl()).toEqual('');
    });

    it('should check ID sharing file', () => {
    	let count=pastiesPage.getPastiesAmount();
    	//expect(count).toEqual();
        pastiesPage.choosePastie('');
        //expect
    });

    it('should check button copy on pasties page', () => {    	
        pastiesPage.getLinkCopyButton();
        //expect(page.getLinkCopyButton()).toEqual('https://pasta.lab.epam.com/pasties/j7ythffq');
    });

});

