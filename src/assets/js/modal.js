'use strict'

/* Construção da modal window */
const stAccordion = document.querySelector('.one-a');
const ndAccordion = document.querySelector('.two-a');
const rdAccordion = document.querySelector('.three-a');

const overlay = document.querySelector('.overlay');
const overlayContainer = document.querySelector('.container-see-more-overlay');
const closeModalWindowOne = document.querySelector('.close-modal-one');

const html = document.querySelector('html');

stAccordion.addEventListener('click', function () {
    if (overlayContainer.classList.contains('hidden')) {
        overlayContainer.classList.remove('hidden');
        html.style.position = 'sticky';
    }
});

closeModalWindowOne.addEventListener('click', function () {
    overlayContainer.classList.add('hidden');
    html.style.position = 'relative';
})