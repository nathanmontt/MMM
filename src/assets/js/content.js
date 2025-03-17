'use strict'

/* Não consegui encontrar uma forma menos "custosa" do que essa.
A ideia menos custosa seria: fazer um btn como class, agregando todas as modals. Depois, quando clicada, seria visto se elas contains('frontend') ou  contains('civil-services'). Caso sim, aquela lá é aberta */

// const closeBtnContent = document.querySelector('.close-btn');

// /* Conteúdo Concurso */


// /* Conteúdo Frontend */
// const frontendBtnAcc = document.querySelector(".frontend");
// const frontendContentType = document.querySelector(".content-type-frontend");

// /* Botão que fecha as modals */
// closeBtnContent.addEventListener('click', function () {
//     if (!frontendContentType.classList.contains('hidden')) {
//         frontendContentType.classList.add("hidden");
//     }
// });

// /* Abrindo conteúdos */
// frontendBtnAcc.addEventListener("click", function () {
//     if (frontendContentType.classList.contains('hidden')) {
//         frontendContentType.classList.remove("hidden");
//     }
// });

const openModals = document.getElementsByClassName('open-modal');
const closeModals = document.getElementsByClassName('close-btn');

const openCloseContentGrammar = document.querySelector('.content-type-grammar');
const openCloseContentMath = document.querySelector('.content-type-math');
const openCloseContentEnglish = document.querySelector('.content-type-english');
const openCloseContentFrontend = document.querySelector('.content-type-frontend');

/* Para abrir */
// Frontend
for (let i=0 ; i<openModals.length ; i++) {
    openModals[i].addEventListener('click', function () {
        console.log("asdasddsa")
        if (openModals[i].classList.contains("frontend")) {
            openCloseContentFrontend.classList.remove('hidden')

        } else if (openModals[i].classList.contains("grammar")) {
            openCloseContentGrammar.classList.remove('hidden');

        } else if (openModals[i].classList.contains("math")) {
            openCloseContentMath.classList.remove('hidden');

        } else if (openModals[i].classList.contains("english")) {
            openCloseContentEnglish.classList.remove('hidden');
        }
    });
}

/* Para fechar */
for (let k=0 ; k<closeModals.length ; k++) {
    closeModals[k].addEventListener('click', function () {
        if (!openCloseContentFrontend.classList.contains('hidden')) {
            openCloseContentFrontend.classList.add('hidden');

        } else if (!openCloseContentGrammar.classList.contains('hidden')) {
            openCloseContentGrammar.classList.add('hidden');
            
        } else if (!openCloseContentMath.classList.contains('hidden')) {
            openCloseContentMath.classList.add('hidden');
            
        } else if (!openCloseContentEnglish.classList.contains('hidden')) {
            openCloseContentEnglish.classList.add('hidden');
        }
    })
}