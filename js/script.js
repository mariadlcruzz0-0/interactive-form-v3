/**
 * Interactive Form Project
 */

const guest = document.querySelector('#name');
guest.focus();

/**
 * Job 'Role'
 */
const jobRole = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if( e.target.value === 'other' ) {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

/**
 * T-Shirt Info
 */
const _color = document.querySelectorAll('#color');
const _color2 = document.getElementById('color');
const _design = document.querySelector('#design');
const colorSelector = document.querySelectorAll('#color option');

_color.disabled = true;

_design.addEventListener('change', (e) => {
    e.preventDefault();
    _color.enable = true;
    for ( let i = 0; i < colorSelector.length; i++ ) {
        let dataAttribute = colorSelector[i].getAttribute('data-theme');
        let colorValue = e.target.value;
        
    if( colorValue === dataAttribute) {
        colorSelector[i].hidden = false;
        colorSelector[i].setAttribute('selected', true);
    } else{
                colorSelector[i].hidden = true;
                colorSelector[i].removeAttribute('selected');
        } 
    }});

/**
 * Register for Activities
 */
const register = document.querySelector('.activities');
const activitiesCost = document.querySelector('p.activities-cost');
let total = 0;

register.addEventListener('change', (e) => {
    e.preventDefault();
    let dataCost = parseInt(e.target.getAttribute('data-cost'));

    if(e.target.checked){
        total += dataCost;
    } else if( !e.target.checked ) {
        total -= dataCost;
    }
    activitiesCost.innerHTML = `Total: $${total}`
})

/**
 * Payment Info
 */

const _payment = document.getElementById('payment');
const _creditCard = document.getElementById('credit-card');
const _paypal = document.getElementById('paypal');
const _bitcoin = document.getElementById('bitcoin');

_paypal.style.display = 'none';
_bitcoin.style.display = 'none';

_payment.children[1].setAttribute('selected', true);

_payment.addEventListener('change', (e) => {
    
    if(e.target.value == 'credit-card'){
        _creditCard.style.display = 'block';
        _paypal.style.display = 'none';
        _bitcoin.style.display = 'none';
    }
    if(e.target.value == 'paypal') {
        _creditCard.style.display = 'none';
        _paypal.style.display = 'block';
        _bitcoin.style.display = 'none';
    }
    if(e.target.value == 'bitcoin') {
        _creditCard.style.display = 'none';
        _paypal.style.display = 'none';
        _bitcoin.style.display = 'block';
    }
});

/**
 * Form Validation
 */

const _form = document.querySelector('form');

const _name = document.querySelector('#name');
const _email = document.querySelector('#email');
const _cardNumber = document.querySelector('#cc-num');
const _zipCode = document.querySelector('#zip');
const _cvv = document.querySelector('#cvv');

//  const nameValidator = () => {
//     const name = _name.value;
//     const nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
//  }

_form.addEventListener('submit', (e) => {
    e.preventDefault();
    //name validation
   let nameValue = _name.value;
   const nameTest = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
   //console.log(nameTest);
   
   //email validation
   let emailValue = _email.value;
   const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(emailTest);

});

