/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-09T14:14:38+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-09T16:46:19+11:00
 */

describe('SouthbankSoftware', function() {
  it('should have tilte Southbank Software', function() {
    browser
      .url('http://www.southbanksoftware.com/');

    browser
      .getTitle()
      .should
      .be
      .equal('Southbank Software');

    // if we take screenshot here, the test is not counted as a passed test case. A
    // bug?
    //
    // browser.saveScreenshot('./snapshot.png');
  });
});
