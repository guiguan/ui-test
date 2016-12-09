<!--
@Author: Guan Gui <guiguan>
@Date:   2016-12-09T16:49:57+11:00
@Email:  root@guiguan.net
@Last modified by:   guiguan
@Last modified time: 2016-12-09T16:59:50+11:00
-->

# Webdriver.io VS Nightwatch

## Installation & Run

Just cd to each directory, and do:

1. `npm install`
2. `./run_test.bash`

## Findings

1. Nightwatch
  * pros: nice built-in test runner, stable, fast, chainable syntax, good support for latest node, nice docs
  * cons: cannot use it with own test frameworks, nor can use it as standalone robot

2. Webdriver.io
  * pros: flexible, easier to setup for beginners, can be used as a standalone, good docs
  * cons: buggy (in this demo, if we enable that screenshot, the test case is not included in the final report), a bit slow
