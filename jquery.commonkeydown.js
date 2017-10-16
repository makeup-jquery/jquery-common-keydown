/**
* @file jQuery collection plugin that triggers events for common accessibility
* keys e.g. ENTER, SPACE, ESCAPE, ARROW KEYS on keydown
* @version 1.0.0
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @requires jquery
* @param {Object} [options]
* @param {string} [options.debug] - print debug output to console (default: false)
*/
(function($, window, document, undefined) {
    var pluginName = 'jquery-common-keydown';

    var normalizeEvent = function(type, e) {
        return $.Event(type, { originalEvent: e, target: e.target }); // eslint-disable-line new-cap
    };

    /**
    * jQuery collection plugin that triggers events for common accessibility
    * keys e.g. ENTER, SPACE, ESCAPE, ARROW KEYS on keydown
    *
    * @method "jQuery.fn.commonKeyDown"
    * @fires {object} enterKeyDown
    * @fires {object} escapeKeyDown
    * @fires {object} spaceKeyDown
    * @fires {object} pageUpKeyDown
    * @fires {object} pageDownKeyDown
    * @fires {object} endKeyDown
    * @fires {object} homeKeyDown
    * @fires {object} leftArrowKeyDown
    * @fires {object} upArrowKeyDown
    * @fires {object} downArrowKeyDown
    * @fires {object} rightArrowKeyDown
    * @return {jQuery} chainable jQuery class
    */
    $.fn.commonKeyDown = function commonKeyDown(options) {
        options = $.extend({
            debug: false
        }, options);

        return this.each(function onEach() {
            // check element does not already have this plugin
            if ($.data(this, pluginName) === undefined) {
                jQuery.data(this, pluginName, 'true');

                var $this = $(this);
                var keyCodes = $.fn.commonKeyDown.keyCodes;

                var onKeyDown = function(e) {
                    switch (e.keyCode) {
                        case keyCodes.ENTER:
                            $this.trigger(normalizeEvent('enterKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.ESCAPE:
                            $this.trigger(normalizeEvent('escapeKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.SPACE:
                            $this.trigger(normalizeEvent('spaceKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEUP:
                            $this.trigger(normalizeEvent('pageUpKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.PAGEDOWN:
                            $this.trigger(normalizeEvent('pageDownKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.END:
                            $this.trigger(normalizeEvent('endKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.HOME:
                            $this.trigger(normalizeEvent('homeKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.LEFTARROW:
                            $this.trigger(normalizeEvent('leftArrowKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.UPARROW:
                            $this.trigger(normalizeEvent('upArrowKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.RIGHTARROW:
                            $this.trigger(normalizeEvent('rightArrowKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        case keyCodes.DOWNARROW:
                            $this.trigger(normalizeEvent('downArrowKeyDown', e));
                            /* istanbul ignore next */
                            break;
                        /* istanbul ignore next */
                        default:
                            break;
                    }
                };

                $this.on('keydown', onKeyDown);
            } else if (options.debug === true) {
                console.log('debug: {pluginName} is already installed on {element}'
                    .replace('{pluginName}', pluginName)
                    .replace('{element}', this));
            }
        });
    };

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
}(jQuery, window, document));
