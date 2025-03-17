'use strict'

// Não consegui encontrar uma forma menos "custosa" do que essa

const closeBtnFromContents = document.querySelector('.close-btn');

/* Conteúdo Concurso */
const civilServiceBtnFromAccordion = document.querySelector(".civil-service");
const civilServiceContentTypeContainer = document.querySelector(".content-type-frontend");


/* Conteúdo Frontend */
const frontendBtnFromAccordion = document.querySelector(".frontend");
const frontendContentTypeContainer = document.querySelector(".content-type-frontend");

// Botão que vai servir como um "exit" para todos
closeBtnFromContents.addEventListener('click', function () {
    if (!frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.add("hidden");
    }
});
/* Abrindo conteúdos */

// Concursos
civilServiceBtnFromAccordion.addEventListener("click", function () {
    if (civilServiceContentTypeContainer.classList.contains('hidden')) {
        civilServiceContentTypeContainer.classList.remove("hidden");
    }
});

// Frontend
frontendBtnFromAccordion.addEventListener("click", function () {
    if (frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.remove("hidden");
    }
});
