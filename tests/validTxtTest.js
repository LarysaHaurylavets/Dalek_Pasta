'use strict';

var EC = protractor.ExpectedConditions;
var HomePage=require('../po/homePage.js');
var PastiePage=require('../po/pastiePage.js');
var PastiesPage=require('../po/pastiesPage.js');
var CodePage = require('../po/codePage.js');
var helper = require('../support/Helper.js');
var main = new HomePage();
var pastiePage = new PastiePage();
var pastiesPage = new PastiesPage();
var codePage = new CodePage();


describe('upload file on main page', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        //console.log("!!!!!!! BEFORE ALL VISIT called");
        main.visit();
        browser.sleep(5000);
        //main.login();
        console.log("!!!!!!! BEFORE ALL LOGIN end");
    //     setTimeout(function() {
    //        done();
    //    }, 10000);
    });

    afterEach(() => {
        helper.pauseFor(1000);
    });

    it('should set description for txt file', function(){
        main.setDescription("Txt file");
        expect(pastiePage.getDescText()).toEqual('Txt file');
    });

    it('should upload valid txt file', function(){
        main.setExpirationDate('10min');
        expect(main.uploadButton.isPresent()).toBe(true);
        main.uploadUI('txt');

    });

    it('should share valid txt file', function(){
        main.shareButton.click();
        helper.waitForClickable(pastiePage.copyButton, 5000);
        expect(pastiePage.copyButton.isPresent()).toBe(true);

        helper.waitForClickable(codePage.syntaxLabel, 5000);
        expect(codePage.syntaxLabel.isPresent()).toBe(true);

    });

});
