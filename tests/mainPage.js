'use strict';

var EC = protractor.ExpectedConditions;
var Helper = require('../support/Helper.js');

// TEST (wull be removed)
xdescribe('Main page', () => {

  beforeAll(() => {
    console.log("beforeAll");

    browser.waitForAngularEnabled(false);
    // browser.get('https://pasta.lab.epam.com/');
    browser.get('https://pasta.lab.epam.com/pasties/ytsddhqs');
  });

  afterAll( () => {
    browser.sleep(3000);
  });

  beforeEach(() => {
    console.log("before each");
  });

  xit('should open the main page', () => {
    var BasePage = require('../po/BasePage');
    var HomePage = require('../po/HomePage.js');
    var main = new HomePage();
    main.visit();
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');

    main.getHeader().clickPasties();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');

    main.getHeader().clickLogo();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');


  });

  it('should get and compare the images', () => {
    // var compare = require('../support/imageComparator/fileComparator.js');
    // browser.get('https://pasta.lab.epam.com/images/1jocRLYpE2iVM6HfMuMqg.png');
    //
    //
    //
    // var comparison = compare('./support/filesToUpload/disney_edit.png', './support/filesToUpload/disney_saved.png');
    // expect(comparison).toBeTruthy();


    browser.get('https://pasta.lab.epam.com/pasties/ytsddhqs');

    var ImagePage = require('../po/ImagePage.js');
    var imgPage = new ImagePage();
    imgPage.getImageURL()
      .then((url) => {
        browser.get(url);
      })

    var saveIMG = require('../support/saveImage.js');
    saveIMG('pic');

    browser.sleep(10000);

  });

  xit('should click on the header', () => {
    var header = require('../po/ui/Header.js');
    // var header = new Header();
    header.clickLogo();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/');


    header.clickPasties();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/pasties/page/1');

    header.clickDocumentation();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://pasta.lab.epam.com/info');

  });



});
