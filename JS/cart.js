
let tbody = document.querySelector('table tbody');
let totalPrice = document.querySelector('.total-price');
let subtotalPrice = document.querySelector('.subtotal-price');
let shippingPrice = document.querySelector('.shipping-price');
let btnChickout = document.querySelector('.btn-checkout');

let price = 0;


function getProduct(info) {
    let product;
    if (info.category == 'Phones') {
        product = phonesList[info.id - 1];
    }
    else if (info.category == 'Labtops') {
        product = labtopsList[info.id - 1];
    }
    else if (info.category == 'Clothes') {
        product = clothesList[info.id - 1];
    }
    else {
        product = makeupList[info.id - 1];
    }
    return product;
}

function removeProduct(row) {
    let numOfProducts = Number(localStorage.getItem("CartSize")) - Number(document.querySelector(`#${row} input`).value);
    localStorage.setItem("CartSize", numOfProducts);
    getNumOfProductsInCart();
    let tot = document.querySelector(`#${row} span`);
    console.log(tot);
    price -= Number(tot.innerHTML);
    tbody.removeChild(document.querySelector(`#${row}`));
    localStorage.removeItem(row);
    setCartTotal();
}

function setCartTotal() {
    subtotalPrice.innerHTML = price.toFixed(2);
    totalPrice.innerHTML = (price + Number(shippingPrice.innerHTML)).toFixed(2);
}

(function setProducts() {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "CartSize") {
            let key = localStorage.key(i);
            let info = JSON.parse(localStorage.getItem(key));
            let product = getProduct(info);
            tbody.innerHTML += `
                                <tr id = "${info.category}-${info.id}">
                                    <td><i onclick="removeProduct('${info.category}-${info.id}')" class="fa-solid fa-xmark"></i></td>
                                    <td><img src="${product.src}" loading="lazy" alt=""></td>
                                    <td>${product.itemName}</td>
                                    <td>$<p>${product.price}</p></td>
                                    <td><input onchange="getPecies(this,'${info.category}-${info.id}')" type="number" name="" value="${info.NumberOfPieces}" min="1"
                                            class="w-75 ps-1 text-center cart-item-quantity">
                                    </td>
                                    <td>$<span class"product-total-price">${Number(product.price) * Number(info.NumberOfPieces)}</span></td>
                                </tr>
                            `;
            price += Number(product.price) * Number(info.NumberOfPieces);
        }
    }
    setCartTotal();
})();

function getNumOfProductsInCart() {
    let numOfProducts = document.querySelector(".cart-number");
    let count = localStorage.getItem('CartSize');
    let x;
    if (count == null) {
        x = 0;
        localStorage.setItem('CartSize', x);
    }
    else if (count < 100) {
        x = count;
    }
    else {
        x = "+99";
    }
    numOfProducts.innerHTML = x;
}

function getPecies(input, row) {
    let prc = Number(document.querySelector(`#${row} p`).innerHTML);
    document.querySelector(`#${row} span`).innerHTML = (prc * Number(input.value)).toFixed(2);
    let rows = tbody.querySelectorAll(`tr span`);
    price = 0;
    rows.forEach(cost => {
        price += +cost.innerHTML;
    });
    setCartTotal();
}

btnChickout.addEventListener('click', () => {
    if (localStorage.getItem('CartSize') == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Cart is Empty',
        });
    }
    else {
        Swal.fire(
            'Good job!',
            'The order will arrive soon',
            'success'
        );
        setTimeout(_ => {
            tbody.innerHTML = "";
            localStorage.clear();
            localStorage.setItem('CartSize', 0);
        }, 2000);
    }
});