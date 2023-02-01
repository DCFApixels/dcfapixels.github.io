let _isInit = false;
let _timeout = 6 * 1000; //6 seconds

function init() {
    if(_isInit)
        return;

    _isInit = true;
    setTimeout(function() {
        if (arguments.callee.done) 
            return;
        arguments.callee.done = true;
        let elem = document.querySelector('.load-screen');
        elem.classList.add("hidden");
        elem.classList.remove("display-fixed");
    }, 1);
};

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

setTimeout(function() {
    init();
}, _timeout);

