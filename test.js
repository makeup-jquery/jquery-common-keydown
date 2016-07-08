describe("jquery.commonkeydown.js", function() {
    var keyCodes = $.fn.commonKeyDown.keyCodes;

    beforeAll(function() {
        $('body').empty().append('<div class="widget"><div tabindex="0" role="button">Fake Button</div><div tabindex="0" role="button">Fake Button</div></div>');
        $('.widget').commonKeyDown('[role=button]');
    });

    it("should trigger enterkeydown event", function(done){
        // assert
        $('.widget').on('enterKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should trigger esckeydown event", function(done){
        // assert
        $('.widget').on('escapeKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ESCAPE, which: keyCodes.ESCAPE } ));
    });

    it("should trigger spacekeydown event", function(done){
        // assert
        $('.widget').on('spaceKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.SPACE, which: keyCodes.SPACE } ));
    });

    it("should trigger pageupkeydown event", function(done){
        // assert
        $('.widget').on('pageUpKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEUP, which: keyCodes.PAGEUP } ));
    });

    it("should trigger pagedownkeydown event", function(done){
        // assert
        $('.widget').on('pageDownKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEDOWN, which: keyCodes.PAGEDOWN } ));
    });

    it("should trigger endkeydown event", function(done){
        // assert
        $('.widget').on('endKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.END, which: keyCodes.END } ));
    });

    it("should trigger homekeydown event", function(done){
        // assert
        $('.widget').on('homeKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.HOME, which: keyCodes.HOME } ));
    });

    it("should trigger leftkeydown event", function(done){
        // assert
        $('.widget').on('leftArrowKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.LEFTARROW, which: keyCodes.LEFTARROW } ));
    });

    it("should trigger upkeydown event", function(done){
        // assert
        $('.widget').on('upArrowKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.UPARROW, which: keyCodes.UPARROW } ));
    });

    it("should trigger rightkeydown event", function(done){
        // assert
        $('.widget').on('rightArrowKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.RIGHTARROW, which: keyCodes.RIGHTARROW } ));
    });

    it("should trigger downkeydown event", function(done){
        // assert
        $('.widget').on('downArrowKeyDown', done);
        // execute
        $('[role=button]').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.DOWNARROW, which: keyCodes.DOWNARROW } ));
    });
});
