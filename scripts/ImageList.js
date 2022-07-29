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
        if (IsMobileDevice() == true)
        {
            portfolioBlocks.forEach(block => {
                block.hideDescription();
            });
        }
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

    if (IsMobileDevice() == false)
    {
        this.root.addEventListener("mouseover", this.showDescription);
        this.root.addEventListener("mouseout", this.hideDescription);
    } else
    {
        this.root.addEventListener("click", this.showDescription);
    }
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

        if (elemdata.style != null)
            content.classList.add(elemdata.style);
        else
            content.classList.add("default");

        let img = document.createElement("img");
        img.src = IMAGE_PATH + elemdata.image;
        if (elemdata.imageScale != null)
        {
            img.style.width = elemdata.imageScale;
            img.style.height = elemdata.imageScale;
        }
        img.classList.add("preview");
        

        let des;
        if (elemdata.demoUrl != null && elemdata.demoUrl != "")
        {
            des = document.createElement("a");
            des.target = "_blank";   
        }
        else
            des = document.createElement("div");

        des.href = elemdata.demoUrl;
        des.classList.add("portfolio_description");

        if (elemdata.video != null)
        {
            let desload = document.createElement("div");
            desload.innerHTML = '<svg class="spinner" viewBox="0 0 50 50">'+
            '<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>'+
            '</svg>';
            des.appendChild(desload); 

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
            desImg.classList.add("preview");
            des.appendChild(desImg); 
        }

        let ptitle = document.createElement("p");
        ptitle.innerHTML = elemdata.name != null ? elemdata.name : "";
        ptitle.classList.add("title");
        des.appendChild(ptitle);

        let ptext = document.createElement("p");
        ptext.innerHTML = elemdata.description != null ? elemdata.description : "";
        ptext.classList.add("text");
        des.appendChild(ptext);
  

        if ((elemdata.demoUrl != null && elemdata.demoUrl != "") ||
            (elemdata.demoUrl == null && elemdata.video == null && elemdata.links == null))
        {
            let openbutton = document.createElement("div");
            openbutton.classList.add("open_button");
            openbutton.src = "images/OpenWith.png";            
            des.appendChild(openbutton);
        }

        if (elemdata.demoUrl == null && elemdata.video == null && elemdata.links == null)
        {
            des.style.cursor = "pointer";
            des.addEventListener("click", function(){ImageBrowser.Show(elemdata.image, datasource=="pixelArt")})
        }  

        if (elemdata.links != null)
        {
            let linksblock = document.createElement("div"); 
            linksblock.classList.add("links_block");

            for (let j = 0; j < elemdata.links.length; j++) {
                const link = elemdata.links[j];
                let linkblock = document.createElement("div");
                let icon = document.createElement("img");
                icon.src = link.icon;
                let a = document.createElement("a");
                a.href = link.url;
                a.target = "_blank"; 
                a.appendChild(icon);
                let tn = document.createElement("p");
                tn.textContent = link.text;
                a.appendChild(tn);

                linkblock.appendChild(a);
                linksblock.appendChild(linkblock);
            }
            des.appendChild(linksblock);
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

