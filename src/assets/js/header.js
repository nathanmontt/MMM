'use strict'

// Primeiro, começamos criando o evento do scroll. Usamos window (eu acho que é pra isso) quando não sabemos qual elemento usar
// Depois, criamos uma var que armazena o valor dos pixels na tela pela scrollPosY.

window.addEventListener('scroll', function () {
    let varVal = 670;

    // const nav = document.querySelector('.container-navbar');
    const logoProject = document.querySelector('.logo');
    const iconDropDown = this.document.getElementById('icon');
    const changeColorMenuOptions = document.querySelectorAll('.links');

    const holderOfPosYValue = window.scrollY;

    // Logo do projeto
    if (holderOfPosYValue > varVal) {
        logoProject.style.color = "black";
    } else {
        logoProject.style.color = "white";
    }

    // Ícone do menu (dropdown)
    if (holderOfPosYValue > varVal) {
        iconDropDown.setAttribute("fill", "#000000");
    } else {
        iconDropDown.setAttribute("fill", "#FFFFFF");
    }

    // Cada elemento do menu
    changeColorMenuOptions.forEach(el => {
        if (holderOfPosYValue > varVal) {
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