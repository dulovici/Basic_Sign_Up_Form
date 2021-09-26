
(function() {
'use strict'

const inputs = [...document.querySelectorAll('.input')];
const email = document.querySelector('.email');
const registerButton = document.querySelector('.register');

function checkEmail() {
    const re = /\S+@\S+\.\S+/;
    re.test(email.firstElementChild.value) 
    ? email.classList.remove('show')
    : email.classList.add('show');
}

function checkInputs() {
    inputs.forEach(el => {
        el.firstElementChild.value.length === 0 ? el.classList.add('show') : el.classList.remove('show');
        checkEmail()
    })

}

registerButton.addEventListener('click', checkInputs)
})()