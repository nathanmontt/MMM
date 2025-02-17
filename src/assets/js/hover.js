'use strict'

// Variáveis para a animação do hover em "explorar"
const textExplore = document.querySelector('.explore');
const downArrow = document.getElementById('icon');
let transformValTime = '0.3s';
let varEmValEx = '0.8em';

/* -- FUNÇÕES -- */
textExplore.addEventListener('mouseover', function handleMouseOverExplore () {
    downArrow.style.transform = `translateY(${varEmValEx})`;
    downArrow.style.transition = `transform ${transformValTime}`;
});

textExplore.addEventListener('mouseout', function handleMouseOutExplore () {
    downArrow.style.transform = `translateY(0.5em)`;
});