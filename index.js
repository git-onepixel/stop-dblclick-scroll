
(function () {
    if (typeof navigator === 'undefined') {
        return false;
    }
    // In ios platform
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {

        var lastTouchEnd = 0;

        document.addEventListener('touchend', function (e) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
})();