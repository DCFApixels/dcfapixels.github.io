let videoelems = document.querySelectorAll("video.my_video");
videoelems.forEach(element => {
    element.classList.add("poster");
    element.onclick = function(){
        element.classList.remove("poster");
        element.onclick = null;
    }
});