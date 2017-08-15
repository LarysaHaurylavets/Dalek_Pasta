const PastiePage = require('../po/pastiePage.js');

class CodePage extends PastiePage{
	constructor(){
		super();
		this.syntaxLabel=element(by.css('span.on-text'));
	}
}

module.exports = CodePage;