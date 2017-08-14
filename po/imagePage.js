'use strict';
var helper = require('../support/Helper.js')

const PastiePage = require('./pastiePage.js');

class ImagePage extends PastiePage {
	constructor() {
		super();
	}

  getImageURL() {
    var element = browser.$('div img.fullscreen-image.ng-scope');
    return helper.waitForPresence(element).then(()=> {
      return element.getAttribute("src")
    })
  }

}

module.exports = ImagePage;
