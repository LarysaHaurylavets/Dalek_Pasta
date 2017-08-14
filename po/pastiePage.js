'use strict';

const BasePage=require('./BasePage.js');

class PastiePage extends BasePage{

	constructor(){
		super();
		this.url='pasties/date7kny';
		this.linkField=element(by.css('p.url'));		
		this.copyButton=element(by.css('copy-to-clipboard'));
		this.contentBox=element(by.css('div.images'));
		this.descText=element.all(by.css('input')).first();
		this.syntaxLabel=element(by.css('span.on-text'));
	}

	getLinkField(){
		return this.linkField.getText();
	}

	clickCopyButton(){
		return this.copyButton.click();
	}

	getLinkCopyButton(){
		return this.copyButton.getAttribute('copy-to-clipboard');
	}

	getDescText(){
		return this.descText.getAttribute('value');
	}
}
module.exports=PastiePage;


