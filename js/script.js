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
 * T-Shit Info
 */
const _color = document.querySelector('#color');
const _design = document.querySelector('#design');
const colorSelector = _color.children;

_design.addEventListener('change', (e) => {
    _color.enable = true;

    if( e.target.value === 'js puns') {

        for ( let i = 0; i < colorSelector.length; i++ ) 
    {
            if (colorSelector[i].getAttribute('data-theme') === 'heart js') {
                colorSelector[i]. hidden = true;
        } else if (colorSelector[i].getAttribute('data-theme') === 'js puns') {
                colorSelector[i]. hidden = false;
        } 
    }
}  else if ( e.target.value === 'heart js' ) {

        for ( let i = 0; i < colorSelector.length; i++ ) {

            if (colorSelector[i].getAttribute('data-theme') === 'js puns') {
                colorSelector[i]. hidden = true;
            } else if (colorSelector[i].getAttribute('data-theme') === 'heart js') {
                colorSelector[i]. hidden = false;   
            }
        }
    }
});

/**
 * Register for Activities
 */
const register = document.querySelector('fieldset');
const activitiesCost = document.querySelector('#activities-cost');
let total = 0;

register.addEventListener('changed', (e) => {
   


})

/**
 * Payment Info
 */

