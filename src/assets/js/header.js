'use strict'

const hambMenuOpenClose = document.querySelector('.open-close-hamb-menu');
const menuOptionsHolder = document.querySelectorAll('.options-holder');

hambMenuOpenClose.addEventListener('click', function() {
    for (let i = 0; i < menuOptionsHolder.length; i++) {
        if (menuOptionsHolder[i].classList.contains('hidden')) {
            menuOptionsHolder[i].classList.remove('hidden');
        } else {
            menuOptionsHolder[i].classList.add('hidden');
        }
    }
});

// // Função para modificar a cor das fontes quando a tela descer até um determinado ponto
// window.addEventListener('scroll', function changeFontMenuOptionsColor () {
//     // Variável local da função para armazenar o valor do scroll;
//     let varVal = 670;
    
//     // Declaração dos elementos que serão usados no processo;
//     const logoProject = document.querySelector('.logo');
//     const iconDropDown = document.getElementById('icon');
//     const changeColorMenuOptions = document.querySelectorAll('.links');
    
//     // Na hora de fazer a verificação, eu poderia colocar o window.scrollY, porém é mais simples armazená-lo em uma variável;
//     // Lembrando que o scrollY é do tipo number, ou seja, ele nos retorna um valor;
//     const holderOfPosYValue = window.scrollY;
    
//     // Usamos esse valor para verificar com a varVal que definimos anteriormente;
//     // Logo do projeto
//     if (holderOfPosYValue > varVal) {
//         logoProject.style.color = "black";
//     } else {
//         logoProject.style.color = "white";
//     }
    
//     // Como não é apenas um elemento, sempre usar o método forEach()
//     // Cada elemento do menu
//     changeColorMenuOptions.forEach(el => {
//         if (holderOfPosYValue > varVal) {
//             el.style.color = "black";
//         } else {
//             el.style.color = "white";
//         }
//     });

//     // Achado no W3School, se tornou uma praticidade mudar os atributos ao invés de modificar um elemento (imagem, gif, etc) como um todo. Não sabia. Conhecimento novo
//     // Ícone do menu (dropdown)
//     if (holderOfPosYValue > varVal) {
//         iconDropDown.setAttribute("fill", "#000000");
//     } else {
//         iconDropDown.setAttribute("fill", "#FFFFFF");
//     }
// });