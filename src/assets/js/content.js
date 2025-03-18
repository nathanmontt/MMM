'use strict'

/* Não consegui encontrar uma forma menos "custosa" do que essa.
A ideia menos custosa seria: fazer um btn como class, agregando todas as modals. Depois, quando clicada, seria visto se elas contains('frontend') ou  contains('civil-services'). Caso sim, aquela lá é aberta */

// const closeBtnContent = document.querySelector('.close-btn');

// /* Conteúdo Concurso */


// /* Conteúdo Frontend */
// const frontendBtnAcc = document.querySelector(".frontend");
// const frontendContentType = document.querySelector(".content-type-frontend");

// /* Botão que fecha as modals */
// closeBtnContent.addEventListener('click', function () {
//     if (!frontendContentType.classList.contains('hidden')) {
//         frontendContentType.classList.add("hidden");
//     }
// });

// /* Abrindo conteúdos */
// frontendBtnAcc.addEventListener("click", function () {
//     if (frontendContentType.classList.contains('hidden')) {
//         frontendContentType.classList.remove("hidden");
//     }
// });

const openModals = document.getElementsByClassName('open-modal');
const closeModals = document.getElementsByClassName('close-btn');

const openCloseContentGrammar = document.querySelector('.content-type-grammar');
const openCloseContentMath = document.querySelector('.content-type-math');
const openCloseContentEnglish = document.querySelector('.content-type-english');
const openCloseContentFrontend = document.querySelector('.content-type-frontend');

/* Para abrir */
// Frontend
for (let i=0 ; i<openModals.length ; i++) {
    openModals[i].addEventListener('click', function () {
        console.log("asdasddsa")
        if (openModals[i].classList.contains("frontend")) {
            openCloseContentFrontend.classList.remove('hidden')

        } else if (openModals[i].classList.contains("grammar")) {
            openCloseContentGrammar.classList.remove('hidden');

        } else if (openModals[i].classList.contains("math")) {
            openCloseContentMath.classList.remove('hidden');

        } else if (openModals[i].classList.contains("english")) {
            openCloseContentEnglish.classList.remove('hidden');
        }
    });
}

/* Para fechar */
for (let k=0 ; k<closeModals.length ; k++) {
    closeModals[k].addEventListener('click', function () {
        if (!openCloseContentFrontend.classList.contains('hidden')) {
            openCloseContentFrontend.classList.add('hidden');

        } else if (!openCloseContentGrammar.classList.contains('hidden')) {
            openCloseContentGrammar.classList.add('hidden');
            
        } else if (!openCloseContentMath.classList.contains('hidden')) {
            openCloseContentMath.classList.add('hidden');
            
        } else if (!openCloseContentEnglish.classList.contains('hidden')) {
            openCloseContentEnglish.classList.add('hidden');
        }
    });
}


/* Colocação do conteúdo */

// Exemplo de dados: cada dia tem uma data e um array de atividades
/* Legenda:
       sotd: subject of the day
*/
const subjectGrammar = [
    {
        date: "17/03/2025",
        sotd: "Fonema",
        activity: [
            "fonema é o som que ouvimos",
            "mas n todas as letras"
        ],
    },
    {
        date: "17/03/2025",
        sotd: "Fonema",
        activity: [
            "fonema é o som que ouvimos",
            "mas n todas as letras"
        ],
    },
    {
        date: "17/03/2025",
        sotd: "Fonema",
        activity: [
            "fonema é o som que ouvimos",
            "mas n todas as letras"
        ],
    },
];

function renderGrammar (subjectGrammar) {
  /* Criando uma div e adicionando uma classe a mesma
  Essa criação vai ser necessária para adicionar todo o conteúdo dentro dela*/
  const grammarContainer = document.createElement('div');
  grammarContainer.classList.add('grammar-day');

  // Primeira interação com o conteúdo
  // Criando um título e anexando a data a ele
  // Dando append no conteúdo para que ele fique dentro do container
  const grammarTitle = document.createElement('p');
  const grammarSOTD = document.createElement('p');

  grammarTitle.innerHTML = `Dia: <strong>${subjectGrammar.date}</strong>`;
  grammarSOTD.innerHTML = `Conteúdo do dia: <strong>${subjectGrammar.sotd}</strong>`;

  grammarContainer.appendChild(grammarTitle);
  grammarContainer.appendChild(grammarSOTD);

  // Cria uma lista para as atividades
  const ulGrammar = document.createElement('ul');

  subjectGrammar.activity.forEach((activities, index, array) => {
    const liGrammar = document.createElement('li');
    liGrammar.innerHTML = activities;
    ulGrammar.appendChild(liGrammar);

    liGrammar.style.cssText = `
      margin-left: 2em;
    `;
  });

  grammarContainer.appendChild(ulGrammar);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  grammarContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  grammarTitle.style.marginLeft = mLS;
  grammarSOTD.style.marginLeft = mLS;

  return grammarContainer;
}

// Função principal para renderizar todos os conteúdos do grammar no container. Fazer isso com os outros
function renderAllContent() {
  const holderContentGrammar = document.querySelector('.content-type-grammar');
  
  // Limpa qualquer conteúdo anterior
  // holderContentGrammar.innerHTML = '';

  // Percorre o array 'days' e renderiza cada dia
  subjectGrammar.forEach(subject => {
    const grammarEl = renderGrammar(subject);
    holderContentGrammar.appendChild(grammarEl);
  });
}

// Quando a página carrega, chamamos a função de renderizar
document.addEventListener('DOMContentLoaded', () => {
  renderAllContent();
});
  