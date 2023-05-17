let slides = ["#slide1", "#slide2", "#slide3"];
let backword = false, idx = 1;
let sliderLinks = document.querySelectorAll(".slide-nav a");

let contaienr = document.querySelector('.container');
let slideData = document.querySelectorAll('.slide-data');
let slide = document.querySelector('.slide');
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');

sliderLinks[0].addEventListener('click', function(){
    resetSliderLinks();
    sliderLinks[0].classList.add('active');
    idx = 0;
    moveSlider(idx);
});

sliderLinks[1].addEventListener('click', ()=>{
    resetSliderLinks();
    sliderLinks[1].classList.add('active');
    
    idx = 1;
    moveSlider(idx)
});

sliderLinks[2].addEventListener('click', ()=>{
    resetSliderLinks();
    sliderLinks[2].classList.add('active');
    idx = 2;
    moveSlider(idx);
});

function resetSliderLinks(){
    sliderLinks[0].classList.remove('active');
    sliderLinks[1].classList.remove('active');
    sliderLinks[2].classList.remove('active');
}

function moveSlider(count){
    let x = slide.offsetWidth;
    slide1.style.transform = `translateX(-${count * x}px)`;
    slide2.style.transform = `translateX(-${count * x}px)`;
    slide3.style.transform = `translateX(-${count * x}px)`;
}

window.addEventListener("resize", setSlideWidth);
function setSlideWidth(){
    if(contaienr.offsetWidth <= 768){
        slideData[0].style.width = `${contaienr.offsetWidth}px`;
        slideData[1].style.width = `${contaienr.offsetWidth}px`;
        slideData[2].style.width = `${contaienr.offsetWidth}px`;
    }
}
setSlideWidth();
setInterval(function(){
    if(idx == slides.length){
        backword = true;
        idx-=2;
    }
    else if(idx == -1){
        backword = false;
        idx+=2;
    }
    if(idx == 0){
        resetSliderLinks();
        sliderLinks[idx].classList.add('active');
    }
    else if(idx == 0){
        resetSliderLinks();
        sliderLinks[idx].classList.add('active');
    }
    else{
        resetSliderLinks();
        sliderLinks[idx].classList.add('active');
    }
    if(!backword){
        moveSlider(idx);
        idx++;
    }
    else{
        moveSlider(idx);
        idx--;
    }
    
},8000);