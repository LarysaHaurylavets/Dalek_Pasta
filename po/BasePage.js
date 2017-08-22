'use strict';
const exec = require('child_process').execFile;
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

    login() {
        browser.driver.switchTo().activeElement();
        browser.sleep(5000);
        exec('./support/login.exe', function (err, data) {
            //console.log(err);
            //console.log(data.toString());
        });
        return browser.sleep(10000);
    }
}
module.exports = BasePage;
