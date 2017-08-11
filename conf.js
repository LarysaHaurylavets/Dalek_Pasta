exports.config = {
  params: {
    defaultTimeOut: 5000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showTiming: true
  },

  specs: ['tests/*.js'],

  multiCapabilities: [
    {
      name: 'desktop',
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=1524,1068', '--disable-infobars']
      }
    }

  ]
}
