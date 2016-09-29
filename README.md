# jquery-common-keydown

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-common-keydown"><img src="https://api.travis-ci.org/ianmcburnie/jquery-common-keydown.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-common-keydown?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-common-keydown/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-common-keydown"><img src="https://david-dm.org/ianmcburnie/jquery-common-keydown.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-common-keydown#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-common-keydown/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that adds observer for common accessibility keydown event, e.g. enter, space, esc, arrows.

```js
$(collection).commonKeyDown();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install jquery-common-keydown
```

## Example

```html
<ul>
    <li><button>Button 1</button></li>
    <li><button>Button 2</button></li>
    <li><button>Button 3</button></li>
</ul>
```

```js
// non-delegated event listener
$('ul').commonKeyDown().on('spaceKeyDown enterKeyDown', function(e) {
    // this = ul
    // e.target = button
});
// delegated event listener
$('ul').commonKeyDown().on('spaceKeyDown enterKeyDown', 'button', function(e) {
    // this = button
    // e.target = button
});
```

## Events

* `enterKeyDown`
* `escapeKeyDown`
* `spaceKeyDown`
* `pageUpKeyDown`
* `pageDownKeyDown`
* `endKeyDown`
* `homeKeyDown`
* `leftArrowKeyDown`
* `upArrowKeyDown`
* `rightArrowKeyDown`
* `downArrowKeyDown`

## Constants

```js
$.fn.commonKeyDown.keyCodes = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFTARROW: 37,
    UPARROW: 38,
    RIGHTARROW: 39,
    DOWNARROW: 40
};
```

## Development

Run `npm start` for browser based development or `npm run tdd` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` launch local server and refreshes browser on any source file change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run lint` lints code and reports to lint.txt
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-keydown

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-keydown?branch=master
