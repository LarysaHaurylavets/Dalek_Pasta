const BasePage = require('./BasePage.js');

class HomePage extends BasePage {
    constructor() {
        super();
        this.uploadButton = element(by.css('.share-button'));
        this.descriptionField = element(by.css('.input-description'));
        this.expirationDropdown = {
            expiration10min: element(by.xpath('//select/option[1]')),
            expiration1d: element(by.xpath('//select/option[2]')),
            expiration3d: element(by.xpath('//select/option[3]')),
            expiration7d: element(by.xpath('//select/option[4]')),
            expiration2w: element(by.xpath('//select/option[5]')),
            expiration1m: element(by.xpath('//select/option[6]'))
        }
    }
   setExpirationDate(expiration){
        return expiration.click();
    }
    // test it
    setDescription(text){
        return descriptionField.sendKeys(text);
    }
}
module.exports = HomePage;
