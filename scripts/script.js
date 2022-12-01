const btn = document.getElementById('btn');
const emailInput = document.getElementById('email-input');
const error = document.querySelector('.error-icon');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const spanHiden = document.querySelector('#spanHiden');

btn.addEventListener('click', (event) => {
    if(emailRegex.test(emailInput.value) === false) {
        error.style.display='block';
        spanHiden.style.display='block';
    }

    else if(emailRegex.test(emailInput.value) === true
    && error.style.display=='block'
    && spanHiden.style.display=='block')  {
        error.style.display='none';
        spanHiden.style.display='none';
    }
    
})