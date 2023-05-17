
let btnAddCart = document.querySelector(".add-to-cart");
let btnCloseAlert = document.querySelector(".close-btn");
let alertSuccess = document.querySelector(".alert");


btnAddCart.addEventListener('click', showAlert);
let timout;
function showAlert(){
    alertSuccess.classList.add("show");
    let opc = 1;
    alertSuccess.style.opacity = `${opc}`;
    timout = setTimeout(function(){
        let interval = setInterval(function(){
            opc-=0.25;
            alertSuccess.style.opacity = `${opc}`;
            if(opc == 0)
            {
                // console.log(`End of interval`);
                alertSuccess.classList.remove("show");
                clearInterval(interval);
            }
        },250);
        
    }, 2000);
}

btnCloseAlert.addEventListener('click', function(){
    alertSuccess.classList.remove("show");
    clearTimeout(timout);
});

