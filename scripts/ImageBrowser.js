var ImageBrowser = {};
ImageBrowser.origin = document.getElementById("image_browser");
ImageBrowser.img = ImageBrowser.origin.querySelector("img");

ImageBrowser.Show = function(url, isPixelart = false)
{
    let x = ImageBrowser.origin;
    x.classList.remove("hidden");
    ImageBrowser.img.src = "images/" + url;

    //x.style.backgroundImage = "url('images/" + url + "')";

    if (isPixelart)
        x.style.imageRendering = "pixelated";
    else
        x.style.imageRendering = "";
};

ImageBrowser.Close = function() 
{
    let x = ImageBrowser.origin;
    x.classList.add("hidden");
};

let closeButton = ImageBrowser.origin.querySelector(".close_button");
closeButton.onclick = function(){
    ImageBrowser.Close();
}


ImageBrowser.origin.classList.add("hidden");