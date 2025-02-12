'use strict'

// Função para modificar a cor das fontes quando a tela descer até um determinado ponto
window.addEventListener('scroll', function changeFontMenuOptionsColor () {
    // Variável local da função para armazenar o valor do scroll;
    let varVal = 670;

    // Declaração dos elementos que serão usados no processo;
    const logoProject = document.querySelector('.logo');
    const iconDropDown = document.getElementById('icon');
    const changeColorMenuOptions = document.querySelectorAll('.links');
    
    // Na hora de fazer a verificação, eu poderia colocar o window.scrollY, porém é mais simples armazená-lo em uma variável;
    // Lembrando que o scrollY é do tipo number, ou seja, ele nos retorna um valor;
    const holderOfPosYValue = window.scrollY;
    console.log(iconDropDown);
    
    // Usamos esse valor para verificar com a varVal que definimos anteriormente;
    // Logo do projeto
    if (holderOfPosYValue > varVal) {
        logoProject.style.color = "black";
    } else {
        logoProject.style.color = "white";
    }
    
    // Como não é apenas um elemento, sempre usar o método forEach()
    // Cada elemento do menu
    changeColorMenuOptions.forEach(el => {
        if (holderOfPosYValue > varVal) {
            el.style.color = "black";
        } else {
            el.style.color = "white";
        }
    });

    // Achado no W3School, se tornou uma praticidade mudar os atributos ao invés de modificar um elemento (imagem, gif, etc) como um todo. Não sabia. Conhecimento novo
    // Ícone do menu (dropdown)
    if (holderOfPosYValue > varVal) {
        iconDropDown.setAttribute("fill", "#000000");
    } else {
        iconDropDown.setAttribute("fill", "#FFFFFF");
    }
});

const iconDropDown = document.getElementById('icon');

document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir o menu de DARK/LIGHT MODE
    const btnChangeModes = document.getElementById('modes');
    // const changeColorMenuOptions = document.querySelectorAll('.links');
    
    iconDropDown.addEventListener('click', function () {
        console.log(dropDownIcon);
        if (btnChangeModes.classList.contains('hidden')) {
            console.log(dropDownIcon);
            btnChangeModes.classList.remove('hidden');
        } else {
            console.log(dropDownIcon);
            btnChangeModes.classList.add('hidden');
        }
        console.log("teste: " + iconDropDown);
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     iconDropDown.addEventListener('click', function () {
//         if (btnChangeModes.classList.contains('hidden')) {
//             btnChangeModes.classList.remove('hidden');
//         } else {
//             btnChangeModes.classList.add('hidden');
//         }
//         console.log("teste: " + iconDropDown);
//     });
// })

// dropDownIcon.addEventListener('click', function openModes() {
//     changeColorMenuOptions.forEach(el => {
//         if (btnChangeModes.classList.contains('hidden')) {
//             btnChangeModes.classList.remove('hidden');
//         } else {
//             btnChangeModes.classList.add('hidden');
//         }
//         console.log("teste: " + dropDownIcon);
//     })
// })

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