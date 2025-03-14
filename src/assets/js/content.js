'use strict'

const modalLinks = document.getElementsByClassName("open-modal");
const container = document.querySelectorAll(".container");
let frontend = document.querySelector(".content-type-frontend");

// Uma das opções viáveis é varrer todo o conteudo em modalLinks e depois verificar um por um e ver onde cada um entra

// for (let k=0 ; k< modalLinks.length ; k++) {
//     modalLinks[k].addEventListener("click", function () {
//         console.log("debuggs 1");


//         if (frontend.classList.contains('hidden')) {
//             frontend.classList.remove("hidden");
//         } else {
//             frontend.classList.add("hidden");
//         }
//     });
// }