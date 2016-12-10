<!--
@Author: Guan Gui <guiguan>
@Date:   2016-12-09T16:49:57+11:00
@Email:  root@guiguan.net
@Last modified by:   guiguan
@Last modified time: 2016-12-10T15:27:29+11:00
-->

# Webdriver.io VS Nightwatch

Goal of this project is to find the best approach of carrying out UI test for SBS

## Installation & Run

Just cd to each directory, and do:

1. `npm install`
2. `./run_test.bash`

## Findings

Both are:

* selenium based can talk directly to [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
* have good documentations
* support Slack and CI integration
* support for [Page Objects](https://github.com/SeleniumHQ/selenium/wiki/PageObjects)

Individually:

1. Nightwatch
  * pros
    * more github starts
    * nice built-in test runner
    * more stable and faster
    * chainable syntax
    * good support for latest node
  * cons
   * cannot use it with own test frameworks
   * nor can use it as standalone robot

2. Webdriver.io
  * pros
    * more flexible
    * easier to setup for beginners
    * can be used as a standalone robot
  * cons
    * buggy (in this demo, if we enable that screenshot, the test case is not included in the final report)
    * a bit slow

## References

* http://webdriver.io/
* http://nightwatchjs.org/
* https://github.com/dwyl/learn-nightwatch
* http://stackoverflow.com/questions/35981605/what-is-the-difference-between-nightwatch-js-and-webdriver-io

### Automated Test

* https://code.facebook.com/projects/319808741494443/huxley/

### Commercial Cloud-based Solutions

* https://www.browserstack.com/
