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
var currentPastie = 'date7kny';


describe('check contain on pasties page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);        
    });

    afterEach(() => {
        helper.pauseFor(2000);
    });

    it('should open the main page', () => {
        main.visit();
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');
    });
   
    it('should open the pasties page', () => {
        header.clickPasties();
        helper.pauseFor(1000);
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');
    });

    it('should check button copy on pasties page', () => {      
        expect(pastiesPage.getLinkCopyButton(currentPastie)).toEqual('https://pasta.lab.epam.com/pasties/date7kny');
    });

    it('should check ID sharing file', () => {
    	var amount;        
        expect(pastiesPage.getPastiesAmount()).toBe(10);    	
        pastiesPage.choosePastie(currentPastie);
        expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/date7kny');
    });
    

});

