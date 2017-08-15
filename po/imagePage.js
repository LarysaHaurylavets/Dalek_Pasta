'use strict';
var helper = require('../support/Helper.js')

const PastiePage = require('./pastiePage.js');

class ImagePage extends PastiePage {
	constructor() {
		super();
	}

  getImageURL() {
    var element = browser.$('div img.fullscreen-image.ng-scope');
      return helper.waitForPresence(element)
        .then(()=> {
          return element.getAttribute("src")
      })
  }

	saveIMG() {
		return new Promise((resolve, reject) => {
			var save = require('../support/saveFile.js');

				this.getImageURL()
				.then((url) => {
						return browser.get(url);
					})
				.then(()=> {
					save('pic');
					console.log("img saved");
					// browser.sleep(3000);
					resolve("downloaded");
				});
		});
	}

}

module.exports = ImagePage;
