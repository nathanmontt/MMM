'use strict'

// Primeiro, começamos criando o evento do scroll. Usamos window (eu acho que é pra isso) quando não sabemos qual elemento usar
// Depois, criamos uma var que armazena o valor dos pixels na tela pela scrollPosY.

window.addEventListener('scroll', function () {
    const changeColorMenuOptions = document.querySelectorAll('.links');
    const logoProject = document.querySelector('.logo');
    const nav = document.querySelector('.container-navbar');

    const holderOfPosYValue = window.scrollY;

    let val = 670;

    // Logo do projeto
    if (holderOfPosYValue > val) {
        logoProject.style.color = "black";
    } else {
        logoProject.style.color = "white";
    }

    // Cada elemento do menu
    changeColorMenuOptions.forEach(el => {
        if (holderOfPosYValue > val) {
            el.style.color = "black";
        } else {
            el.style.color = "white";
        }
    });
});

// const buttonMenu = document.querySelector('.menu-btn-cta');
// const optionsLinks = document.querySelectorAll('.options-holder');

// buttonMenu.addEventListener("click", function () {
//     console.log("teste");
//     optionsLinks.forEach(element => {
//         if (element.classList.contains('hidden')) {
//             element.classList.remove('hidden');
//         }
//     })
// })
// if (hambMenuBtn && menuItems.length > 0) {
//     hambMenuBtn.addEventListener('click', function () {
//         menuItems.forEach(element => {
//             if (element.classList.contains('hidden')) {
//                 element.classList.remove('hidden');
//                 hambMenuBtn.textContent = 'FECHAR';
//                 menuItemsHolder.classList.add('pg-1');
//             } else {
//                 element.classList.add('hidden');
//                 hambMenuBtn.textContent = 'MENU';
//                 menuItemsHolder.classList.remove('pg-1');
//             }
//         });
//     });
// }