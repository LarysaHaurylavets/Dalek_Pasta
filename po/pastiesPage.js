'use strict';

const BasePage = require('./BasePage.js');

class PastiesPage extends BasePage {

    constructor() {
        super();
        this.pastiesID = $$('tr.url a.pastie-link');
        this.pastiesExp = $$('tr.url>td:nth-child(2)');
        this.pastiesDesc = $$('tr.url>td:nth-child(3)');
        this.pastiesCopyButton = $$('tr.url copy-to-clipboard');
        this.nextPageButton = $$('li.next-page>a');
    }

    getPastieLine(pastieID) {
        return this.pastiesID.reduce(function(acc, elem, ind) {
            return elem.getText().then(function(text) {
                if (text == pastieID) {
                    return acc + ind;
                } else {
                    return acc;
                }
            });
        }, '');
    }

    getExp(pastieID) {
        return this.getPastieLine(pastieID)
            .then((line) => {
                if (line) {
                    return this.pastiesExp.get(line).getText();
                } else {
                    this.nextPageButton.click();
                    browser.sleep(3000);
                    return this.getExp(pastieID);
                }
            });
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
