'use strict';

const BasePage=require('./BasePage.js');

class PastiePage extends BasePage{

	constructor(){
		super();
		this.linkField=element(by.css('p.url')); 
		this.copyButton=element(by.buttonText('Copy'));
		this.contentBox=element(by.css('div.images'));
		this.descText=element(by.css('input.description'));
	}

	getLinkField(){
		return this.linkField.getText();
	}

	getLinkCopyButton(){
		return this.copyButton.clik();
	}

	// getContentBox(){
	// 	return this.contentBox;
	// }

	getDescText(){
		return this.descText.getText();
	}
}
module.exports=PastiePage;
