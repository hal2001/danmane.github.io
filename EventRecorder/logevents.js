var div = d3.select("#originaldiv");

function textAppender(selection, text, ee) {
    var textbox = null;
    var counter = 0;
    return function (e) {
        counter++;
        if (textbox == null) {
            textbox = selection.append("div");
        }
        textbox.text(text + ":" + counter);
        d3.event.preventDefault();
    }
}

function addListener(type) {
    div.on(type, textAppender(div, type));
}

var width = window.innerWidth - 30;
var height = window.innerHeight - 30;
div.style("width", width + "px").style("height", height + "px");

var eventTypes =
['abort',
'afterprint',
'beforeprint',
'beforeunload',
'blur',
'canplay',
'canplaythrough',
'change',
'click',
'contextmenu',
'copy',
'cuechange',
'cut',
'dblclick',
'DOMContentLoaded',
'drag',
'dragend',
'dragenter',
'dragleave',
'dragover',
'dragstart',
'drop',
'durationchange',
'emptied',
'ended',
'error',
'focus',
'focusin',
'focusout',
'formchange',
'forminput',
'hashchange',
'input',
'invalid',
'keydown',
'keypress',
'keyup',
'load',
'loadeddata',
'loadedmetadata',
'loadstart',
'message',
'mousedown',
'mouseenter',
'mouseleave',
'mousemove',
'mouseout',
'mouseover',
'mouseup',
'mousewheel',
'offline',
'online',
'pagehide',
'pageshow',
'paste',
'pause',
'play',
'playing',
'popstate',
'progress',
'ratechange',
'readystatechange',
'redo',
'reset',
'resize',
'scroll',
'seeked',
'seeking',
'select',
'show',
'stalled',
'storage',
'submit',
'suspend',
'timeupdate',
'touchstart',
'touchmove',
'touchend',
'touchcancel',
'undo',
'unload',
'volumechange',
'waiting']

eventTypes.forEach(addListener);
