'use strict';

class BasePage {

  constructor() {
    this.header = require('./ui/Header.js');;
    this.url = '';
  }

  getHeader() {
    return this.header;
  }

  visit() {
    return browser.get('https://pasta.lab.epam.com/' + this.url);
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getUrl() {
      return browser.getCurrentUrl();
  }

}
module.exports = BasePage;
