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

  it('should show the preview', () => {
    browser.get('  https://pasta.lab.epam.com/pasties/rindr8ms');
    var ImagePage = require('../po/ImagePage.js');
    var imgPage = new ImagePage();
    expect(imgPage.bigImageIsVisible()).toBeFalsy();

    imgPage.showPreview();
    expect(imgPage.bigImageIsVisible()).toBeTruthy();

    browser.sleep(1000);
    imgPage.closePreview();
    expect(imgPage.bigImageIsVisible()).toBeFalsy();
  })

  it('should get and compare the images', () => {
    browser.get('https://pasta.lab.epam.com/pasties/ytsddhqs');

   var ImagePage = require('../po/ImagePage.js');
   var imgPage = new ImagePage();
   var compare = require('../support/fileComparator.js');

   imgPage.saveIMG()
     .then(function (msg) {
       console.log("image:", msg);
       browser.sleep(10000)
       .then(function () {
         var comparison = compare('./filesToUpload/pic_downloaded.jpg', './filesToUpload/disney.png');
         expect(comparison).toBeTruthy();
       })
     });
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
