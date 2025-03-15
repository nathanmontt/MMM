'use strict'

// Não consegui encontrar uma forma menos "custosa" do que essa

const closeBtnFromContents = document.querySelector('.close-btn');

const frontendBtnFromAccordion = document.querySelector(".frontend");
const backendClassBtnFromAccordion = document.querySelector(".backend");

const frontendContentTypeContainer = document.querySelector(".content-type-frontend");
const backendContentTypeContainer = document.querySelector(".content-type-backend");

// Botão que vai servir como um "exit" para todos
closeBtnFromContents.addEventListener('click', function () {
    console.log("teste")
    if (!frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.remove("hidden");
    }
});

// Abrindo o conteúdo de frontend
frontendBtnFromAccordion.addEventListener("click", function () {
    if (frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.remove("hidden");
    }
});
