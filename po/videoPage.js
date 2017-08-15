'use strict';
var helper = require('../support/Helper.js')

const PastiePage = require('./pastiePage.js');

class VideoPage extends PastiePage {
	constructor() {
		super();
		this.videoPlayer = element(by.css('#VideoElement'));
	}
<<<<<<< HEAD

=======
>>>>>>> 36ce887237ce1e108f65537fe1b15514657e22ad
	getVideoURL() {
		return element(by.css('#VideoElement > source')).getAttribute("src");
	}
}

module.exports = VideoPage;
