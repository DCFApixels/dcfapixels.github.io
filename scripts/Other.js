

function IsMobileDevice(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

//var bgLayer = document.getElementById("background_layer_1");
//var updateF = function() {
//    const scrollY = window.scrollY;
//    var y = (scrollY / 2) % 1200;
//    console.log(y);
//
//    bgLayer.style.top = `${y}px`;
//    //bgLayer.style.backgroundPositionY = `${y}px`;
//    //bgLayer.style.transform = `translateY(${y}px)`;
//}
//window.addEventListener('scroll', updateF);
