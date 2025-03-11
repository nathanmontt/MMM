'use strict'

const accordionLinks = document.getElementsByClassName("container-open-subtopics");
let i;

for (i=0 ; i< accordionLinks.length ; i++) {
    accordionLinks[i].addEventListener("click", function () {
        const panel = this.nextElementSibling;
        
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}