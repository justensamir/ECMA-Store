let addItemCart = document.querySelector('.add-item .add-to-cart');
let itemQuantity = document.querySelector('.quantity');
let itemCategory = document.querySelector('.item .category');
let itemPrice = document.querySelector('.price .regular-price');
let itemName = document.querySelector('.item-details .item-name');
let itemImg = document.querySelector('.item-img #img');
let popCard = document.querySelector('.about-product');
let closePopUp = document.querySelector('.close');
let blurBack = document.getElementById('blur');
let increaseQuant = document.querySelector(".increase");
let decreaseQuant = document.querySelector(".decrease");

let selectedCard;

increaseQuant.addEventListener('click', function(){
    let count = Number(itemQuantity.innerHTML);
    itemQuantity.innerHTML = ++count;
});

decreaseQuant.addEventListener('click', function(){
    let count = Number(itemQuantity.innerHTML);
    if(count > 1){
        itemQuantity.innerHTML = --count;
    }
});


function getCardInfo(card){
    selectedCard = card;
    let item = getProduct(card);
    setProduct(item);
    setBlur();
}

closePopUp.addEventListener('click',removeBlur);

function setBlur(){
    popCard.classList.add('active');
    blurBack.classList.add('active');
    document.body.classList.add('stop-scroll');   
}

function removeBlur(){
    popCard.classList.remove('active');
    blurBack.classList.remove('active');
    document.body.classList.remove('stop-scroll');
}

function setProduct(item){
    itemName.innerHTML = item.itemName;
    itemPrice.innerHTML = item.price;
    itemCategory.innerHTML = item.category;
    itemImg.setAttribute('src',item.src);
}

function getProduct(card){

    let id = Number(card.getAttribute('attr-card-id'));
    let category = card.getAttribute('attr-card-category');
    let item;
    if(category === 'Phones'){
        item = phonesList[id-1];
    }
    else if(category === 'Laptops'){
        item = labtopsList[id-1];
    }
    else if(category === 'Makeup'){
        item = makeupList[id-1];
    }
    else{
        item = clothesList[id-1];
    }
    return item;
}

addItemCart.addEventListener('click', function(){
    addProductToCart(selectedCard, itemQuantity.innerHTML);
});


