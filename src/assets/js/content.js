'use strict'

const modalLinks = document.getElementsByClassName("open-modal");
const container = document.querySelectorAll(".container");
const contentOne = document.querySelector(".container-frontend");
const contentTwo = document.querySelector(".container-backend");

// Uma das opções viáveis é varrer todo o conteudo em modalLinks e depois verificar um por um e ver onde cada um entra

for (let k=0 ; k< modalLinks.length ; k++) {
    modalLinks[k].addEventListener("click", function () {
        console.log("debuggs 1");
        container.forEach(el => {
            // if (el.style.display === "none") {
            //     console.log("testeqwe");
            // } else {
            //     console.log("teste");
            // }
            el.classList.toggle("hidden");
        })
        // let container = this.nextElementSibling;
        // if (contentOne.classList.contains("hidden") || contentTwo.classList.contains("hid")) {
        //     contentOne.classList.remove("hidden");
        //     contentTwo.classList.remove("hid");
        // } else {
        //     contentOne.classList.add("hidden");
        //     contentTwo.classList.add("hid");
        // }

        // if (container.style.display === "none") {
        //     console.log("testeqwe");
        // } else { 
        //     console.log("teste");
        // }

        // contentOne.classList.toggle("hidden");
        // contentTwo.classList.toggle("hid");
    });
}