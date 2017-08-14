'use strict';

const BasePage = require('./BasePage.js');

class PastiesPage extends BasePage {

    constructor() {
        super();
        this.pastiesID = $$('tr.url a.pastie-link');
        this.pastiesExp = $$('tr.url>td:nth-child(2)');
        this.pastiesDesc = $$('tr.url>td:nth-child(3)');
        this.pastiesCopyButton = $$('tr.url copy-to-clipboard');
        
    }

    getPastieLine(pastieID) {
    	return this.pastiesID.each((element, index) => {
            element.getText().then((text) => {
                if (text == pastieID) {
                    return index;
                }
            });
        });
    }

    getExp(pastieID) {
        let pastieLine = this.getPastieLine(pastieID);
        return this.pastiesExp.get(pastieLine).getText();
    }

    choosePastie(pastieID) {
    	let pastieLine = this.getPastieLine(pastieID);
    	return this.pastiesID.get(pastieLine).click();
    }

    getLinkCopyButton(pastieID) {
    	let pastieLine = this.getPastieLine(pastieID);
    	return this.pastiesCopyButton.get(pastieLine).getAttribute('copy-to-clipboard');
    }

    getPastiesAmount() {
    	return this.pastieID.count();
    }
};

module.exports = PastiesPage;
