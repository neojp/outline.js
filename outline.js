/*! outline.js v1.2.0 - https://github.com/lindsayevans/outline.js/
    Forked by Joan Piedra - @neojp.
    Changelog: remove outlines on page load until <tab> key is ever pressed
*/
(function (d) {

	var styleElement = d.createElement('STYLE'),
		domEvents = 'addEventListener' in d,
		headElement = d.getElementsByTagName('HEAD')[0],
		addEventListener = function (type, callback) {
			// Basic cross-browser event handling
			if (domEvents) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		removeEventListener = function (type, callback) {
			if (domEvents) {
				d.removeEventListener(type, callback);
			} else {
				d.detachEvent('on' + type, callback);
			}
		},
		setCss = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!styleElement.styleSheet ? styleElement.styleSheet.cssText = css_text : styleElement.innerHTML = css_text;
		},
		checkForKeyboardSupport = function (e) {
			// check if tab was pressed
			if (e.which === 9) {
				headElement.removeChild(styleElement);
				removeEventListener('keydown', checkForKeyboardSupport);
			}
		};

	// append css element
	styleElement.id = 'outlinejs';
	setCss(':focus { outline: 0 !important; } ::-moz-focus-inner { border: 0; }');
	headElement.appendChild(styleElement);

	// check for keyboard support
	addEventListener('keydown', checkForKeyboardSupport);

})(document);
