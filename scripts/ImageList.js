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
        let video = des.querySelector('video');
        if (video != null)
        {
            video.currentTime = 0;
            video.play();
        }
    }

    this.hideDescription = function()
    {
        des.classList.add("hidden");
        let video = des.querySelector('video');
        if (video != null)
        {
            video.pause();
        }
    }

    this.root.addEventListener("mouseover", this.showDescription);
    this.root.addEventListener("mouseout", this.hideDescription);
    this.hideDescription();
}

var lists = document.querySelectorAll(".image_list");
for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    buildImageList(list, list.getAttribute('contentName'), list.getAttribute('count'), list.getAttribute('datasource'));
}

function buildImageList(root, contentName, count, datasource)
{
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
        if (elemdata.imageScale != null)
        {
            img.style.width = elemdata.imageScale;
            img.style.height = elemdata.imageScale;
        }
        
        let des = document.createElement("a");
        des.href = elemdata.demoUrl;
        des.classList.add("portfolio_description");

        if (elemdata.video != null)
        {
            let desVideo = document.createElement("video");
            desVideo.src = VIDEO_PATH + elemdata.video;
            desVideo.muted = true;
            desVideo.loop = true;
            des.appendChild(desVideo); 
            desVideo.pause();
        }
        else
        {
            let desImg = document.createElement("img");
            desImg.src = IMAGE_PATH + elemdata.image;
            if (elemdata.imageScale != null)
            {
                desImg.style.width = elemdata.imageScale;
                desImg.style.height = elemdata.imageScale;
            }
            des.appendChild(desImg); 
        }

        let ptitle = document.createElement("p");
        ptitle.innerHTML = elemdata.name;
        ptitle.classList.add("title");
        des.appendChild(ptitle);

        let ptext = document.createElement("p");
        ptext.innerHTML = elemdata.description;
        ptext.classList.add("text");
        des.appendChild(ptext);

        if (elemdata.textColor != null)
        {
            ptext.style.color = elemdata.textColor;
            ptitle.style.color = elemdata.textColor;
        }

  
        portfolioBlocks.push(new Block(content, img, des));
  
        content.appendChild(img);
        content.appendChild(des);
        li.appendChild(content);
        root.appendChild(li);
    }
}

function buildDicription()
{

}

