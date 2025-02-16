'use strict'

/* Construção da modal window */
const stAccordion = document.querySelector('.one-a');
const ndAccordion = document.querySelector('.two-a');
const rdAccordion = document.querySelector('.three-a');

const overlayUni = document.querySelector('.overlay-uni');
const overlayCarrer = document.querySelector('.overlay-carrer');
const overlayHobby = document.querySelector('.overlay-hobby');

const overlayContainerUni = document.querySelector('.container-see-more-overlay-uni');
const overlayContainerCarrer = document.querySelector('.container-see-more-overlay-carrer');
const overlayContainerHobby = document.querySelector('.container-see-more-overlay-hobby');

const closeModalWindowOne = document.querySelector('.close-modal-one');
const closeModalWindowTwo = document.querySelector('.close-modal-two');
const closeModalWindowThree = document.querySelector('.close-modal-three');

const html = document.querySelector('html');

/* -- Uni Container -- */
{
    stAccordion.addEventListener('click', function () {
        if (overlayContainerUni.classList.contains('hidden')) {
            overlayContainerUni.classList.remove('hidden');
            html.style.position = 'sticky';
        }
    });

    closeModalWindowOne.addEventListener('click', function () {
        overlayContainerUni.classList.add('hidden');
        html.style.position = 'relative';
    });
}

/* -- Carrer Container -- */
{
    ndAccordion.addEventListener('click', function () {
        if (overlayContainerCarrer.classList.contains('hidden')) {
            overlayContainerCarrer.classList.remove('hidden');
            html.style.position = 'sticky';
        }
    });

    closeModalWindowTwo.addEventListener('click', function () {
        overlayContainerCarrer.classList.add('hidden');
        html.style.position = 'relative';
    });
}

/* -- Hobby Container -- */
{
    rdAccordion.addEventListener('click', function () {
        if (overlayContainerHobby.classList.contains('hidden')) {
            overlayContainerHobby.classList.remove('hidden');
            html.style.position = 'sticky';
        }
    });

    closeModalWindowThree.addEventListener('click', function () {
        overlayContainerHobby.classList.add('hidden');
        html.style.position = 'relative';
    });
}