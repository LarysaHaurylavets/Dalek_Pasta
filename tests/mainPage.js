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

  beforeEach(() => {
    console.log("before each");
  });

  it('should open the main page', () => {
    var icon = browser.$('.fa.fa-clipboard');
    helper.waitForAndClick(icon, helper.waitForVisible);

    browser.sleep(10000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');
  });


});
