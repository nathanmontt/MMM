'use strict'

// Primeiro, começamos criando o evento do scroll. Usamos window (eu acho que é pra isso) quando não sabemos qual elemento usar

window.addEventListener('scroll', function () {
    const valuePx = 670;
    const changeColorMenuOptions = document.querySelectorAll('.options-holder');
    /* Criamos uma var que armazena o valor do scrollPosY. Como assim?
     * scrollPosY armazena o valor atual dos pixels presentes na tela. Ou seja, para trocarmos as cores das opções do menu, precisamos saber qual posição vamos fazer essa troca
    */

    let xValue = 1;

    const holderOfPosYValue = window.scrollY;
    if (holderOfPosYValue > valuePx) {
        document.body.style.backgroundColor = "red";
    } else {
        this.document.body.style.backgroundColor = "transparent"
    }

    // if (holderOfPosYValue > valuePx) {
    //     changeColorMenuOptions.forEach (function (e) {
    //         e.style.backgroundColor = "blue"
    //     })
    // } else {
    //     console.log(xValue);
    // }

    // changeColorMenuOptions.forEach(function (el) {
    //     if (holderOfPosYValue > valuePx) {
    //         el.style.backgroundColor = "red";
    //     }
    // });
    // changeColorMenuOptions.forEach(element => {
    //     if (holderOfPosYValue > valuePx) {
    //         element.style.color = "red";
    //     } else {
    //         console.log("ainda n");
    //     }
    // })
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