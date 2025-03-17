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
        date: "17 de Março de 2025",
        sotd: "Fonema",
        activities: [
            "fonema é o som que ouvimos",
            "mas n todas as letras"
        ],
    },
    {},
];

const days = [
    {
      date: '2023-09-01',
      activities: [
        'Estudei 2h de Lógica de Programação',
        'Li 10 páginas de um livro sobre Carreira de Web Dev'
      ]
    },
    {
      date: '2023-09-02',
      activities: [
        'Pratiquei exercícios de JavaScript por 1h',
        'Pesquisei ideias para projeto de faculdade',
        'Vi um tutorial sobre SCSS'
      ]
    },
    {
      date: '2023-09-03',
      activities: [
        'Assisti a uma palestra sobre UI/UX',
        'Organizei meus arquivos do projeto E³'
      ]
    }
  ];

function renderGrammar (subjectGrammar) {
  /* Criando uma div e adicionando uma classe a mesma
  Essa criação vai ser necessária para adicionar todo o conteúdo dentro dela*/
  const grammarContainer = document.createElement('div');
  grammarContainer.classList.add('day-block');

  // Primeira interação com o conteúdo
  // Criando um título e anexando a data a ele
  // Dando append no conteúdo para que ele fique dentro do container
  const grammarTitle = document.createElement('h2');
  const grammarSOTD = document.createElement('h4');

  grammarTitle.textContent = `Dia: <strong>${subjectGrammar.date}</strong>`;
  grammarSOTD.textContent = `Conteúdo do dia: <strong>${subjectGrammar.sotd}</strong>`;

  grammarContainer.appendChild(grammarTitle);
  grammarContainer.appendChild(grammarSOTD);

  // Cria uma lista para as atividades
  const ul = document.createElement('ul');
  subjectGrammar.activities.forEach(activityEl => {
      const li = document.createElement('li');
      li.textContent = activityEl;
      ul.appendChild(li);
  });
}

  // Função para renderizar cada dia (data + lista de atividades)
  function renderDay(day) {
    // Cria um container para o dia
    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-block');
  
    // Cria um título com a data
    const dayTitle = document.createElement('h2');
    dayTitle.textContent = `Dia: ${day.date}`;
    dayContainer.appendChild(dayTitle);
  
    // Cria a lista <ul> para as atividades
    const ul = document.createElement('ul');
    day.activities.forEach(activity => {
      const li = document.createElement('li');
      li.textContent = activity;
      ul.appendChild(li);
    });
  
    dayContainer.appendChild(ul);
  
    return dayContainer;
  }
  
  // Função principal para renderizar todos os dias no container
  function renderAllDays() {
    const container = document.querySelector('.content-type-grammar');
    
    // Limpa qualquer conteúdo anterior
    // container.innerHTML = '';
  
    // Percorre o array 'days' e renderiza cada dia
    days.forEach(day => {
      const dayElement = renderDay(day);
      container.appendChild(dayElement);
    });
  }
  
  // Quando a página carrega, chamamos a função de renderizar
  document.addEventListener('DOMContentLoaded', () => {
    renderAllDays();
  });
  