// графика

var Lsprite = {};

function LoadImage(imgName, width, height, frames){
	var imgLoadFlow=document.createElement('img');
	
	var result = {
		image : imgLoadFlow, // загруженное изображение
		frames: frames * 1, // кол-во кадров 
		width: Math.floor(width / frames) * 1, //ширина выводимого изображения
		height: height, //высота выводимого изображения
	}
	
	imgLoadFlow.src = imgName;
	
	return result;
}

function DrawImage(ctx, sprite, x, y, multiplier, frame) {

    frame = frame * 1;

	ctx.drawImage(sprite.image,
				  sprite.width * frame,
				  0,
				  sprite.width,
				  sprite.height,
				  Math.floor(x),
				  Math.floor(y),
				  sprite.width * multiplier,
				  sprite.height * multiplier);
}


var catcanvas = document.querySelector("#catanim")
catcanvas.style.marginBottom = "-" + catcanvas.getAttribute("height") + "px";
catcanvas.classList.remove("hidden");
var multiplier = catcanvas.getAttribute("catsize") * 1;

var ctx = catcanvas.getContext('2d');
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var catAnim = LoadImage("images/PixelCat/CatAnim.png", 442, 26, 13);

var acatAnimI = 0
setInterval(() => {
	ctx.clearRect(0,0,catcanvas.width,catcanvas.height);
    DrawImage(ctx, catAnim, 0, 0, multiplier, acatAnimI)
    acatAnimI++;
    if (acatAnimI >= catAnim.frames)
        acatAnimI = 0;
}, 100);