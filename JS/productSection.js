
let numOfProducts = document.querySelector(".cart-number");

function addToCart(btn, event){
    addProductToCart(btn,1);
    showAlert();
    event.stopPropagation();
}

function addProductToCart(product, pieces){
    let obj = {
        id: product.getAttribute('attr-card-id'),
        category: product.getAttribute('attr-card-category'),
        NumberOfPieces: +pieces,
    }
    
    let key = `${obj.category}-${obj.id}`;
    let item = localStorage.getItem(key);
    
    let count = localStorage.getItem('CartSize');
    count =  +count + obj.NumberOfPieces;
    localStorage.setItem('CartSize',count)
    
    numOfProducts.innerHTML = count < 100? count : "+99";

    if(item == null){
        localStorage.setItem(key, JSON.stringify(obj));
    }
    else{
        item = JSON.parse(item);
        item.NumberOfPieces+=obj.NumberOfPieces;
        localStorage.setItem(key, JSON.stringify(item));
    }
}