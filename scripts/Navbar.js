// собираем все якоря; устанавливаем время анимации и количество кадров
/*const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;*/
/*
anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
*/

function smoothstep (min, max, value) 
{
    var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
}
function smoothstepNormal (value) 
{
    return smoothstep(0, 1, value);
}

var linkNav = document.querySelectorAll('[href^="#"]'), 
    duration = 0.3 * 1000; 

var scrolloffset = -70;

for (var i = 0; i < linkNav.length; i++) 
{
    linkNav[i].addEventListener('click', function(e) 
    { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение

        var scrollpos = window.pageYOffset; 
        var hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        var elempos = document.querySelector(hash).getBoundingClientRect().top + scrolloffset;  
        var start = null;
        var distance = Math.abs(elempos);

        requestAnimationFrame(step);  

        function step(globaltime) 
        {
            if (start === null) 
                start = globaltime;
            var time = globaltime - start;
                
            let noramelnewpos = smoothstepNormal(time / duration);
            let newpos = Math.sign(elempos) * noramelnewpos * distance + scrollpos;

            if (noramelnewpos >= 1)
            {
                location.hash = hash
            }

            window.scrollTo(0, newpos);

            if (noramelnewpos < 1) 
            {
                requestAnimationFrame(step)
            } 
        }
    }, false);
}
