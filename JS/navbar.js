let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav-bar");
let links = document.querySelectorAll(".nav-bar ul li a");
let scrollToTop = document.querySelector(".scroll-up");
let cart = document.querySelector('.cart');

window.onscroll = function(){
    this.scrollY > 0? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
}

let ref = window.location.href;
let isHamburgerClicked = false;
hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    console.log(isHamburgerClicked);
});

links[0].addEventListener('click',function(){
    resetLinks();
    nav.classList.remove('active');
    links[0].classList.add('active');
    if(ref !== '../index.html'){
        window.location.href = `../index.html`;
    }
});

links[1].addEventListener('click',function(){
    resetLinks();
    nav.classList.remove('active');
    links[1].classList.add('active');
    if(ref !== '../index.html#product'){
        window.location.href = `../index.html#product`;
    }
});

links[2].addEventListener('click',function(){
    resetLinks();
    nav.classList.remove('active');
    links[2].classList.add('active');
    if(ref !== '../index.html#services'){
        window.location.href = `../index.html#services`;
    }
});

links[3].addEventListener('click',function(){
    resetLinks();
    links[3].classList.add('active');
    window.location.href = '../about.html';
});

links[4].addEventListener('click',function(){
    resetLinks();
    links[4].classList.add('active');
    window.location.href = '../contactus.html';
});

cart.addEventListener('click', function(){
    if(ref !== 'cart.html'){
        window.location.href = `../cart.html`;
        console.log(ref);
    }
});

function resetLinks(){
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('active');
    }
}

(function getNumOfProductsInCart(){
    let numOfProducts = document.querySelector(".cart-number");
    let count = localStorage.getItem('CartSize');
    let x;
    if(count == null){
        x = 0;
        localStorage.setItem('CartSize',x);
    }
    else if(count < 100){
        x = count;
    }
    else{
        x = "+99";
    }
    numOfProducts.innerHTML = x;
})();