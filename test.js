jasmine.DEFAULT_TIMEOUT_INTERVAL = 500;

describe("jquery.commonkeydown.js", function() {
    var keyCodes = $.fn.commonKeyDown.keyCodes;

    beforeAll(function() {
        $('body').empty().append('<ul class="widget"><li><button>Button 1</button></li><li><button>Button 2</button><li><button>Button 3</button></li></ul>');
        $('.widget').commonKeyDown();
    });

    it("should trigger enterkeydown event", function(done){
        // assert
        $('.widget').on('enterKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should trigger esckeydown event", function(done){
        // assert
        $('.widget').on('escapeKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ESCAPE, which: keyCodes.ESCAPE } ));
    });

    it("should trigger spacekeydown event", function(done){
        // assert
        $('.widget').on('spaceKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.SPACE, which: keyCodes.SPACE } ));
    });

    it("should trigger pageupkeydown event", function(done){
        // assert
        $('.widget').on('pageUpKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEUP, which: keyCodes.PAGEUP } ));
    });

    it("should trigger pagedownkeydown event", function(done){
        // assert
        $('.widget').on('pageDownKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEDOWN, which: keyCodes.PAGEDOWN } ));
    });

    it("should trigger endkeydown event", function(done){
        // assert
        $('.widget').on('endKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.END, which: keyCodes.END } ));
    });

    it("should trigger homekeydown event", function(done){
        // assert
        $('.widget').on('homeKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.HOME, which: keyCodes.HOME } ));
    });

    it("should trigger leftkeydown event", function(done){
        // assert
        $('.widget').on('leftArrowKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.LEFTARROW, which: keyCodes.LEFTARROW } ));
    });

    it("should trigger upkeydown event", function(done){
        // assert
        $('.widget').on('upArrowKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.UPARROW, which: keyCodes.UPARROW } ));
    });

    it("should trigger rightkeydown event", function(done){
        // assert
        $('.widget').on('rightArrowKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.RIGHTARROW, which: keyCodes.RIGHTARROW } ));
    });

    it("should trigger downkeydown event", function(done){
        // assert
        $('.widget').on('downArrowKeyDown', done);
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.DOWNARROW, which: keyCodes.DOWNARROW } ));
    });

    it("should set correct context of non-delgated event", function(done){
        // assert
        $('.widget').on('enterKeyDown', function(e) {
            expect(this.tagName.toLowerCase()).toBe('ul');
            done();
        });
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should set correct context of delgated event", function(done){
        // assert
        $('.widget').on('enterKeyDown', 'button', function(e) {
            expect(this.tagName.toLowerCase()).toBe('button');
            done();
        });
        // execute
        $('button').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });
});
