'use strict'

const modalLinks = document.getElementsByClassName("open-modal");
const contentOne = document.querySelector(".container-frontend");
const contentTwo = document.querySelector(".container-backend");
let k;

for (k=0 ; k< modalLinks.length ; k++) {
    modalLinks[k].addEventListener("click", function () {
        if (contentOne.classList.contains("hidden") || contentTwo.classList.contains("hid")) {
            contentOne.classList.remove("hidden");
            contentTwo.classList.remove("hid");
        } else {
            contentOne.classList.add("hidden");
            contentTwo.classList.add("hid");
        }
    });
}