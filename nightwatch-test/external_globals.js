/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-09T13:42:03+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-09T14:02:35+11:00
 */

const chromedriver = require('chromedriver');
module.exports = {
  before: function(done) {
    chromedriver.start();

    done();
  },

  after: function(done) {
    chromedriver.stop();

    done();
  }
};
