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

const _color = document.querySelector('#color');
const _design = document.querySelector('#design');
const colorSelector = document.querySelectorAll('#color option');
_color.disabled = true;

_design.addEventListener('change', (e) => {
    e.preventDefault();
    _color.disabled = false;
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

// Validates that an activity was selected
function validateActivities(e) 
{
    const checkboxes = register.querySelectorAll('[type="checkbox"]:checked');
    console.log(checkboxes.length);
    if(checkboxes.length == 0){
        //not valid
        register.classList.add('not-valid');
        register.classList.remove('valid');
        register.lastElementChild.style.display = 'block';
        e.preventDefault();
       } else {
        //Valid
        register.classList.add('valid');
        register.classList.remove('not-valid');
        register.lastElementChild.style.display = 'none';
       }
}

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

//This Function validates that all the fields have been filled out before submitting

function testInput(input,_input, e) {
    if(!input){
        //not valid
        _input.parentNode.classList.add('not-valid');
        _input.parentNode.classList.remove('valid');
        _input.parentNode.lastElementChild.style.display = 'block';
        e.preventDefault();
       } else {
        //Valid
        _input.parentNode.classList.add('valid');
        _input.parentNode.classList.remove('not-valid');
        _input.parentNode.lastElementChild.style.display = 'none';
       }
};

_form.addEventListener('submit', (e) => {
    //name validation
   let nameValue = _name.value;
   const nameTest = /^[^\s][a-zA-z|\s]*$/i.test(nameValue);
   testInput(nameTest, _name, e);
   //console.log(nameTest);

   //email validation
   let emailValue = _email.value;
   const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
   testInput(emailTest, _email, e);
    //console.log(emailTest);
    validateActivities(e);

    if(_payment.value === 'credit-card')
    {
        //card validation
        let cardValue = _cardNumber.value;
        const cardTest = /^\d{13,16}$/.test(cardValue);
        testInput(cardTest, _cardNumber, e);
        //console.log(cardTest);

        //zipcode validation
        let zipCodeValue = _zipCode.value;
        const zipCodeTest = /^\d{5}$/.test(zipCodeValue);
        testInput(zipCodeTest, _zipCode, e);
        //console.log(zipCodeTest);

        //cvv validation
        let cvvValue = _cvv.value;
        const cvvTest = /^\d{3}$/.test(cvvValue);
        testInput(cvvTest, _cvv, e);
        //console.log(cvvTest);
    }
});
/**
 * Accessibility
 */

 const _checkbox = document.querySelectorAll('input[type=checkbox]');

_checkbox.forEach(activity => {
    activity.addEventListener('focus', e => {
        e.target.parentNode.classList.add('focus');
    })
    activity.addEventListener('blur', e => {
        e.target.parentNode.classList.remove('focus');
    })
});

