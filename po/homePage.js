const BasePage = require('./BasePage.js');
const uploader = require('../support/uploadUI.js');

class HomePage extends BasePage {
    constructor() {
        super();
        this.uploadButton = element(by.cssContainingText('.share-button', 'Upload'));
        this.shareButton = element(by.cssContainingText('.share-button', 'Share'));
        this.descriptionField = element(by.css('.input-description'));
        this.contentBox = element(by.css('.workplace'));
        this.invalidSizeAlert = element(by.css('.toast-warning'));
        this.invalidSizeImgText = 'File size limit is 4MB';
        this.invalidSizeTxtText = 'Size limit for text is 500kB';
        this.expirationDropdown = {
            expiration10min: element(by.xpath('//select/option[1]')),
            expiration1d: element(by.xpath('//select/option[2]')),
            expiration3d: element(by.xpath('//select/option[3]')),
            expiration7d: element(by.xpath('//select/option[4]')),
            expiration2w: element(by.xpath('//select/option[5]')),
            expiration1mnth: element(by.xpath('//select/option[6]'))
        }
    }
    setExpirationDate(expiration) {
        return this.expirationDropdown['expiration' + expiration].click();
    }
    setDescription(text) {
        return this.descriptionField.sendKeys(text);
    }

    //fileType {txt, pic, video}
    uploadUI(fileType) {
        return this.uploadButton.click()
          .then(() => uploader(fileType))
          .then(() => {
            browser.sleep(3000);
            this.uploadButton.click();
        });
    }
}
module.exports = HomePage;
