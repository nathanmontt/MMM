'use strict'

// Variáveis para a animação do hover em "mais sobre"
const linkSeeMore = document.querySelector('.view-more-link');
const rightArrow  = document.getElementById('icon-see-more');
let varEmValSeeMore = '0.55em';
let transformValTime = '0.3s';

// Variáveis para a animação do hover em "explorar"
const textExplore = document.querySelector('.explore');
const downArrow = document.getElementById('icon');
let varEmValEx = '0.8em';

/* -- FUNÇÕES -- */
linkSeeMore.addEventListener('mouseover', function handleMouseOverSeeMore () {
    rightArrow.style.transform = `translateX(${varEmValSeeMore})`;
    rightArrow.style.transition = `transform ${transformValTime}`;
});

linkSeeMore.addEventListener('mouseout', function handleMouseOutSeeMore() {
    rightArrow.style.transform = `translateX(0)`;
});

textExplore.addEventListener('mouseover', function handleMouseOverExplore () {
    downArrow.style.transform = `translateY(${varEmValEx})`;
    downArrow.style.transition = `transform ${transformValTime}`;
});

textExplore.addEventListener('mouseout', function handleMouseOutExplore () {
    downArrow.style.transform = `translateY(0.5em)`;
});