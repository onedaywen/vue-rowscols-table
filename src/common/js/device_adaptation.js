(function( window , document ){
    'use strict';
    var REM = {};
    const designWidth = 750;

    (function() {
        var viewportEl = document.querySelector('meta[name="viewport"]');
        var dpr = window.devicePixelRatio || 1;
        var scale = 1 / dpr;
        var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';

        if (viewportEl) {
            viewportEl.setAttribute('content', content);
        } else {
            viewportEl = document.createElement('meta');
            viewportEl.setAttribute('name', 'viewport');
            viewportEl.setAttribute('content', content);
            document.head.appendChild(viewportEl);
        }
    })();

    /**
     * *
     * @param  {[number]} px [像素值]
     * @param  {[number]} dW [设计稿宽度]
     * @return {[String]}    [rem为单位的字符串，如 ‘1.2rem’]
     */
    REM.px2rem = function (px, dW) {
        var rem = (parseInt(px) / (parseInt(dW) || designWidth)).toFixed(8);
        if(Number.isNaN(rem)) {
            throw new Error('REM.px2rem(@px<Number>, @dW<Number>); @px the pixel value; @dW the design pixel width');
        }
        return rem + 'rem';
    }

    REM.rem2px = function (rem, dW) {
        var px = (parseInt(rem) / (parseInt(dW) || designWidth)).toFixed(8);
        if(Number.isNaN(px)) {
            throw new Error('REM.rem2px(@rem<Number>, @dW<Number>); @rem the rem value; @dW the design pixel width');
        }
        return px + 'px';
    }

    REM.resize = function () {
        var innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth || 750;
        document.documentElement.style.fontSize = innerWidth + 'px';
        REM.callback && REM.callback();

    };

    REM.resize();

    window.addEventListener( 'resize' , function(){
        clearTimeout(REM.tid);
        REM.tid = setTimeout(REM.resize, 33);
    } , false);

    window.REM = REM; 


})( window , document);