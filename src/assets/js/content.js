'use strict'

// Não consegui encontrar uma forma menos "custosa" do que essa

const closeBtnFromContents = document.querySelector('.close-btn');

const frontendBtnFromAccordion = document.querySelector(".frontend");

const frontendContentTypeContainer = document.querySelector(".content-type-frontend");

// Botão que vai servir como um "exit" para todos
closeBtnFromContents.addEventListener('click', function () {
    if (!frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.add("hidden");
    }
});

// Abrindo o conteúdo de frontend
frontendBtnFromAccordion.addEventListener("click", function () {
    if (frontendContentTypeContainer.classList.contains('hidden')) {
        frontendContentTypeContainer.classList.remove("hidden");
    }
});

const ul = document.createElement('ul');
const li = document.createElement('li');

let variable = ul.appendChild(li);

frontendContentTypeContainer.appendChild(variable)