document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("mySlide");
    var myCarousel = new bootstrap.Carousel(element, {
        interval: 10000
    });
});

/*Show Color Option When Click On The Gear*/
let gear = document.getElementById('gear-color-option');
let colorOption = document.getElementById('color-option');

gear.addEventListener('click',function(){
    colorOption.classList.toggle('cop');
});

/*Change Color Option*/
let changeColor =Array.from(document.querySelectorAll('.color-option ul li'));
changeColor[0].style.backgroundColor = "#E41817";
changeColor[1].style.backgroundColor = "#176be4";

changeColor[0].addEventListener('click',function(){
//    console.log(changeColor[0].getAttribute('data-value'));
 document.querySelector("link[href*='them']").setAttribute('href',changeColor[0].getAttribute('data-value'));
  
  
   
});
changeColor[1].addEventListener('click',function(){
    console.log(changeColor[1].getAttribute('data-value'));
    document.querySelector("link[href*='them']").setAttribute('href',changeColor[1].getAttribute('data-value'))
    
 });

//  Loading Screen
let load = document.querySelector('.overlay');
window.onload = function(){
    setInterval(function(){
        load.style.display = "none";
        document.body.classList.add('active');
        load.remove();
    },5000);
    

}

// //Scroll To top
let scrollBtn = document.querySelector('.scroll-button a');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
    }else {
        scrollBtn.style.display = 'none';
    }
}
