'use strict';

var EC = protractor.ExpectedConditions;
var Helper = require('../support/Helper.js');
var helper;

// TEST (wull be removed)
describe('Main page', () => {

  beforeAll(() => {
    console.log("beforeAll");
    helper = new Helper();

    browser.waitForAngularEnabled(false);
    browser.get('https://pasta.lab.epam.com/');
  });

  afterAll( () => {
    browser.sleep(3000);
  });

  beforeEach(() => {
    console.log("before each");
  });

  it('should open the main page', () => {
    // var icon = browser.$('.fa.fa-clipboard');
    // helper.waitForAndClick(icon, helper.waitForVisible);
    //
    // browser.sleep(1000);
    // expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');
    var BasePage = require('../po/BasePage');
    var main = new BasePage();
    main.visit();
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');

    main.getHeader().clickPasties();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');

    main.getHeader().clickLogo();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');


  });

  xit('should click on the header', () => {
    var header = require('../po/ui/Header.js');
    // var header = new Header();
    header.clickLogo();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');


    header.clickPasties();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');

    header.clickDocumentation();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/info');

  });



});
