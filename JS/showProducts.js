let root = document.querySelector('.products');
let allProducts = document.querySelector(".all-products");
let phone = document.querySelector(".phones");
let labtop = document.querySelector(".labtops");
let makup = document.querySelector(".make-up");
let clothes = document.querySelector(".clothes");

let next = document.querySelector(".pagination .directions .next");
let prev = document.querySelector(".pagination .directions .prev");
let currentPage = document.querySelector(".pagination .directions .current");
let totalPages = document.querySelector(".pagination .directions .total");
let cards = [], numOfProduct = 8, startFrom , numOfPages, activePage;

function createCard(item) {
    return `
            <div class="card1" onclick="getCardInfo(this)" attr-card-id="${item.id}" attr-card-category=${item.category}>
                    <div class="card-img"><img class="item-img" src="${item.src}" loading="lazy"></div>
                    <div class="card-body">
                        <h3 class="item-name">${item.itemName}</h3>
                        <div class="price-rate">
                            <div class="item-rate">
                                    <span class="fa-solid fa-star star"></span>
                                    <span class="fa-solid fa-star star"></span>
                                    <span class="fa-solid fa-star star"></span>
                                    <span class="fa-solid fa-star-half-stroke star"></span>
                                    <span class="fa-regular fa-star star"></span>
                            </div>
                            <span class="price">$${item.price}</span>
                        </div>
                        <p class="card-text">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.
                            Lorem
                            jeamsun denim lorem jeansum.</p>
                            <button class="add-cart fa-solid fa-cart-plus"
                            onclick="addToCart(this, event)" attr-card-id=${item.id} attr-card-category=${item.category}></button>
                    </div>
                </div>
            `;
}

function setProducts(list) {
    cards = list.map(createCard);
    startFrom = 0;
    
    numOfPages = Math.ceil(cards.length / numOfProduct);
    activePage = 1;

    currentPage.innerHTML = activePage;
    totalPages.innerHTML = numOfPages;

    root.innerHTML = subArray(cards, startFrom, numOfProduct).join('');
}

phone.addEventListener('click', function (e) {
    clicked(phonesList,phone);
    e.preventDefault();
});

labtop.addEventListener('click', function (e) {
    clicked(labtopsList,labtop);
    e.preventDefault();
});

makup.addEventListener('click', function (e) {
    clicked(makeupList,makup);
    e.preventDefault();
});

clothes.addEventListener('click', function (e) {
    clicked(clothesList,clothes);
    e.preventDefault();
});

allProducts.addEventListener('click', function (e) {
    clicked(makeupList.concat(phonesList, clothesList, labtopsList), allProducts);
    e.preventDefault();
});

function clicked(list, link){
    updateLinks(link);
    setProducts(list);
    activePage = 1;
    prev.classList.add("active");
    next.classList.remove("active");
}

function updateLinks(element) {
    resetLinks();
    element.style.setProperty("--zero-width", "100%");
}

function resetLinks() {
    phone.style.setProperty("--zero-width", "0");
    labtop.style.setProperty("--zero-width", "0");
    makup.style.setProperty("--zero-width", "0");
    clothes.style.setProperty("--zero-width", "0");
    allProducts.style.setProperty("--zero-width", "0");
}

function subArray(array, start, end) {
    end = end > array.length ? array.length : end;
    let newArray = [];
    for (let i = start; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

next.addEventListener('click', function () {
    startFrom += numOfProduct;
    if(startFrom < cards.length){
        root.innerHTML = subArray(cards, startFrom, startFrom + numOfProduct).join('');
        currentPage.innerHTML = ++activePage;
    }
    else{
        startFrom -= numOfProduct;
    }
    if(activePage == numOfPages){
        next.classList.add("active");
        prev.classList.remove("active");
    }
    else{
        prev.classList.remove("active");
        next.classList.remove("active");
    }
});

prev.addEventListener('click', function () {
    startFrom -= numOfProduct;
    if (startFrom >= 0) {
        root.innerHTML = subArray(cards, startFrom, startFrom + numOfProduct).join('');
        currentPage.innerHTML = --activePage;
    }
    else {
        startFrom = 0;
        prev.classList.add(".active");
    }
    if(activePage == 1){
        prev.classList.add("active");
        next.classList.remove("active");
    }else{
        prev.classList.remove("active");
        next.classList.remove("active");
    }
});

(function intializeProducts() {
    allProducts.style.setProperty("--zero-width", "100%");
    setProducts(clothesList.concat(phonesList, makeupList, labtopsList));
    prev.classList.add("active");
}());
