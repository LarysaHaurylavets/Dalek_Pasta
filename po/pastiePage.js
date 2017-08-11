'use strict';

const BasePage=require('./BasePage.js');

class PastiePage extends BasePage{

	constructor(){
		super();
		this.linkField=element(by.id('#copy-content')); 
		this.copyButton=element(by.buttonText('Copy'));
		this.contentBox=element(by.css('div.images'));
		this.descText=element(by.css('input.description'));
	}
}
module.exports=PastiePage;