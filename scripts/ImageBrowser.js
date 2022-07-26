var ImageBrowser = {};
ImageBrowser.origin = document.getElementById("image_browser");

ImageBrowser.Show = function(url, isPixelart = false)
{
    let x = ImageBrowser.origin;
    x.classList.remove("hidden");
    x.style.backgroundImage = "url('images/" + url + "')";

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