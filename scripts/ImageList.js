const VIDEO_PATH = "videos/"
const IMAGE_PATH = "images/"
const IMAGE_F = ".png"
const VIDEO_F = ".mp4"

var portfolioBlocks = [];

function Block(root, img, des)
{
    this.root = root;
    this.img = img;
    this.des = des;

    this.showDescription = function()
    {
        des.classList.remove("hidden");
        //des.style.display = "";
        let video = des.querySelector('video');
        video.currentTime = 0;
        video.play();
    }

    this.hideDescription = function()
    {
        des.classList.add("hidden");
        //des.style.display = "none";
        let video = des.querySelector('video');
        video.pause();
    }

    this.root.addEventListener("mouseover", this.showDescription);
    this.root.addEventListener("mouseout", this.hideDescription);
    //img.onmouseout = 
    this.hideDescription();
}

var lists = document.querySelectorAll(".image_list");
for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    buildImageList(list, list.getAttribute('contentName'), list.getAttribute('count'), list.getAttribute('datasource'));
}

function buildImageList(root, contentName, count, datasource)
{
    //for (let i = 0; i < count; i++) 
    //{
    //    var li = document.createElement("li");
    //    var content = document.createElement("div");
//
    //    var img = document.createElement("img");
    //    img.src = IMAGE_PATH + contentName + (i + 1) + IMAGE_F;
//
    //    var des = document.createElement("div");
    //    des.classList.add("portfolio_description");
    //    var desVideo = document.createElement("video");
    //    desVideo.src = VIDEO_PATH + contentName + (i + 1) + VIDEO_F;
    //    desVideo.muted = true;
    //    desVideo.autoplay = true;
    //    desVideo.loop = true;
    //    des.appendChild(desVideo);
//
    //    portfolioBlocks.push(new Block(content, img, des));
//
    //    content.appendChild(img);
    //    content.appendChild(des);
    //    li.appendChild(content);
    //    root.appendChild(li);
    //    
    //    desVideo.pause();
    //}

    if (datasource == null)
        return;
    let contentdata = data.portfolio[datasource];

    for (let i = 0; i < contentdata.length; i++) 
    {
        const elemdata = contentdata[i];

        let li = document.createElement("li");
        let content = document.createElement("div");
  
        let img = document.createElement("img");
        img.src = IMAGE_PATH + elemdata.image;
  
        let des = document.createElement("a");
        des.href = elemdata.demoUrl;
        des.classList.add("portfolio_description");
        let desVideo = document.createElement("video");
        desVideo.src = VIDEO_PATH + elemdata.video;
        desVideo.muted = true;
        desVideo.autoplay = true;
        desVideo.loop = true;
        let ptext = document.createElement("p");
        ptext.innerHTML = elemdata.description;
        ptext.classList.add("text");
        let ptitle = document.createElement("p");
        ptitle.innerHTML = elemdata.name;
        ptitle.classList.add("title");
        des.appendChild(desVideo);
        des.appendChild(ptext);
        des.appendChild(ptitle);
  
        portfolioBlocks.push(new Block(content, img, des));
  
        content.appendChild(img);
        content.appendChild(des);
        li.appendChild(content);
        root.appendChild(li);
        
        desVideo.pause();
    }
}

function buildDicription()
{

}

