describe("jquery.commonkeydown.js", function() {

    var keyCodes = $.fn.commonKeyDown.keyCodes;

    beforeAll(function() {
        $('body').empty().append('<div>');
        $('body').commonKeyDown('div');
    });

    it("should trigger enterkeydown event", function(done){
        // assert
        $('body').on('enterKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should trigger esckeydown event", function(done){
        // assert
        $('body').on('escapeKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ESCAPE, which: keyCodes.ESCAPE } ));
    });

    it("should trigger spacekeydown event", function(done){
        // assert
        $('body').on('spaceKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.SPACE, which: keyCodes.SPACE } ));
    });

    it("should trigger pageupkeydown event", function(done){
        // assert
        $('body').on('pageUpKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEUP, which: keyCodes.PAGEUP } ));
    });

    it("should trigger pagedownkeydown event", function(done){
        // assert
        $('body').on('pageDownKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEDOWN, which: keyCodes.PAGEDOWN } ));
    });

    it("should trigger endkeydown event", function(done){
        // assert
        $('body').on('endKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.END, which: keyCodes.END } ));
    });

    it("should trigger homekeydown event", function(done){
        // assert
        $('body').on('homeKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.HOME, which: keyCodes.HOME } ));
    });

    it("should trigger leftkeydown event", function(done){
        // assert
        $('body').on('leftArrowKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.LEFTARROW, which: keyCodes.LEFTARROW } ));
    });

    it("should trigger upkeydown event", function(done){
        // assert
        $('body').on('upArrowKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.UPARROW, which: keyCodes.UPARROW } ));
    });

    it("should trigger rightkeydown event", function(done){
        // assert
        $('body').on('rightArrowKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.RIGHTARROW, which: keyCodes.RIGHTARROW } ));
    });

    it("should trigger downkeydown event", function(done){
        // assert
        $('body').on('downArrowKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.DOWNARROW, which: keyCodes.DOWNARROW } ));
    });

});
