'use strict'

/* Construção da modal window */
const openModalMoreStudyOne = document.querySelector('.overlay-btn-cta-one');
const openModalMoreStudyTwo = document.querySelector('.overlay-btn-cta-two');
const openModalMoreStudyThree = document.querySelector('.overlay-btn-cta-three');
const modalContainer = document.querySelector('.container-modal');
const closeModal = document.querySelector('.close-modal');

// Testes para verificar o valor armazenado em cada botão
// console.log(seeMoreStudyOne);

openModalMoreStudyOne.addEventListener('click', function () {
    if (modalContainer.classList.contains('hidden')) {
        modalContainer.classList.remove('hidden');
    } else {
        closeModalFunc();
    }
});

function closeModalFunc () {
    closeModal.addEventListener('click', function () {
        if (modalContainer.classList.contains('hidden')) {
            modalContainer.classList.add('hidden');
        }
    });
}