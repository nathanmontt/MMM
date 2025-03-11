'use strict'

const modalLinks = document.getElementsByClassName("open-modal");
let k;

for (k=0 ; k< modalLinks.length ; k++) {
    modalLinks[k].addEventListener("click", function () {
        const containerContent = this.nextElementSibling;
        
        if (containerContent.classList.contains("hidden")) {
            containerContent.classList.remove("hidden");
        } else {
            containerContent.classList.add("hidden");
        }
    });
}