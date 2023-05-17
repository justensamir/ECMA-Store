let errors = document.querySelectorAll('.error-msg');
console.log(errors);

let objError = {
    firstName: 0,
    lastName: 1,
    email: 2,
    phone: 3,
    message: 4
};
const phoneRegex = /^\+20(10|11|12|15)\d{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');

let send = document.querySelector('input[type="submit"]');
console.log(send);

document.forms[0].onsubmit = function (e) {
    validate();
    e.preventDefault();     
};


function validate(){
    let valid = true;

    if(fName.value == ""){
        errors[objError.firstName].style.visibility = 'visible';
        valid = false;
    }else{
        errors[objError.firstName].style.visibility = 'hidden';
    }

    if(lName.value == ""){
        errors[objError.lastName].style.visibility = 'visible';
        valid = false;
    }else{
        errors[objError.lastName].style.visibility = 'hidden'
        flag = false;
    }

    if(!emailRegex.test(email.value)){
        errors[objError.email].style.visibility = 'visible';
        valid = false;
    }else{
        errors[objError.email].style.visibility = 'hidden'
        flag = false;
    }
    
    if(!phoneRegex.test(phone.value)){
        errors[objError.phone].style.visibility = 'visible';
        valid = false;
    }else{
        errors[objError.phone].style.visibility = 'hidden'
        flag = false;
    }

    if(message.value == ""){
        errors[objError.message].style.visibility = 'visible';
        valid = false;
    }else{
        errors[objError.message].style.visibility = 'hidden'
        flag = false;
    }
    
    if(valid){
        setTimeout(()=>{
            location.href = '../home.html';
        },2000);
    }
}