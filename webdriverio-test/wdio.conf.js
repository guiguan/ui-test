/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-09T14:11:24+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-09T16:32:55+11:00
 */

const chromedriver = require('chromedriver');

exports.config = {
  specs: ['./tests/*.js'],
  exclude: [],
  host: 'localhost',
  port: 9515,
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  logLevel: 'debug',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd'
  },
  onPrepare: function() {
    chromedriver.start(['--url-base=/wd/hub']);
  },
  before: function() {
    const chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  after: function(failures, pid) {},
  onComplete: function() {
    chromedriver.stop();
  }
};
