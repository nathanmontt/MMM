'use strict'

// const containerContentImg = document.querySelector("container-project-show-imgs");
// const containerAccessTopics = document.querySelector("container-link-see-more-projects");
const mediaQuery = window.matchMedia("(min-width: 1000px)");

// Verificando se a media query da variável vai "bater" com a media query do browser
function handleTabletChange (e) {
    if (e.matches) {
        containerAccessTopics.style.display = "flex";
        containerAccessTopics.style.justifyContent = "space-between";
        // containerContentImg.classList.remove("hidden");
        alert("ola");
    } else {
        // containerContentImg.classList.add("hidden");
        console.log("teste222");
    }
}

// Register event listener
landscapeMQ.addListener(handleTabletChange);

// Initial check
handleTabletChange(landscapeMQ);