/**
 * Interactive Form
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

_color.disabled = true;

_design.addEventListener('change', (e) => {
    _color.disabled = false;
    
    if( e.target.value === 'js puns') {
    

    }

})
