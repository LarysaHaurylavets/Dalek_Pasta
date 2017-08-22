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
      return new Promise(function (resolve, reject)  {
        // browser.sleep(8000);
        console.log("run login script");
        exec('./support/exe/login.exe', function (err, data) {
        // exec('./login.exe', function (err, data) {
            console.log(err);
            console.log(data.toString());
        });
        console.log("script finished");
        browser.sleep(3000);
        resolve("login finished");
      });
    }



	//  login() {
	// 	exec('./login.exe', [process.env.MY_USER, process.env.MY_PASS], function(err, data) {
	// 		console.log(process.env.MY_USER.toString());
	// 		console.log(data.toString());
	// 	});
	// 	return browser.sleep(10000);
	// }

}
module.exports = BasePage;
