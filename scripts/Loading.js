function init() {
    setTimeout(function() {
        if (arguments.callee.done) return;
        arguments.callee.done = true;
        let elem = document.querySelector('.load-screen');
        elem.classList.add("hidden");
        elem.classList.remove("display-fixed");
    }, 1);
};
/*
//для Mozilla/Firefox/Opera 9 
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}*/

/* для Internet Explorer */
/*@cc_on@*/
/*@if (@_win32)
document.write("<script id=\"__ie_onload\" defer=\"defer\" src=\"java script:void(0)\"><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function () {
if (this.readyState == "complete") {
init(); $('.main').show();
}
};
/*@end@*/

/* для Safari */
if (/WebKit/i.test(navigator.userAgent)) { // условие для Safari
    var _timer = setInterval(function () {
    if (/loaded|complete/.test(document.readyState)) {
        clearInterval(_timer);
        init(); // вызываем обработчик для onload
        }
    }, 10);
}

/* для остальных браузеров */

window.onload = init;
let elem = document.querySelector('.load-screen');
elem.classList.add("display-fixed");
elem.classList.remove("hidden");

