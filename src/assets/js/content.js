'use strict'

// Não consegui encontrar uma forma menos "custosa" do que essa

const frontendClass = document.querySelector(".frontend");
const backendClass = document.querySelector(".backend");
let frontend = document.querySelector(".content-type-frontend");
let backend = document.querySelector(".content-type-backend");

frontendClass.addEventListener("click", function () {
    if (frontend.classList.contains('hidden')) {
        frontend.classList.remove("hidden");
    } else {
        frontend.classList.add("hidden");
    }
});

backendClass.addEventListener("click", function () {
    if (backend.classList.contains('hidden')) {
        backend.classList.remove("hidden");
    } else {
        backend.classList.add("hidden");
    }
});