/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-09T13:50:35+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-09T15:50:16+11:00
 */



 var config = require('../nightwatch.conf.js');

 module.exports = { // adapted from: https://git.io/vodU0
   'Southbank Software Title': function(browser) {
     browser
       .url('http://www.southbanksoftware.com/')
       .waitForElementVisible('body', 5000)
       .assert.title('Southbank Software')
       .saveScreenshot('./snapshot.png')
       .end();
   }
 };
