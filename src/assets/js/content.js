'use strict'

/* Não consegui encontrar uma forma menos "custosa" do que essa.
A ideia menos custosa seria: fazer um btn como class, agregando todas as modals. Depois, quando clicada, seria visto se elas contains('frontend') ou  contains('civil-services'). Caso sim, aquela lá é aberta */

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
        date: "",
        sotd: "",
        activity: [
            ``,
        ],
    }
];

const subjectMath = [
    {
        date: "as",
        sotd: "dddd",
        activity: [
            `assaddas`,
        ],
    }
];

const subjectEnglish = [
    {
        date: "as",
        sotd: "dddd",
        activity: [
            `s`,
        ],
    }
];

const careerFront = [
    {
        date: "",
        content: "dddd",
        activity: [
            `sasdasqwe qwddqwd`,
        ],
    }
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

function renderMath (subjectMath) {
  const mathContainer = document.createElement('div');
  mathContainer.classList.add('math-day');

  const mathTitle = document.createElement('p');
  const mathSOTD = document.createElement('p');

  mathTitle.innerHTML = `Dia: <strong>${subjectMath.date}</strong>`;
  mathSOTD.innerHTML = `Conteúdo do dia: <strong>${subjectMath.sotd}</strong>`;

  mathContainer.appendChild(mathTitle);
  mathContainer.appendChild(mathSOTD);

  const ulMath = document.createElement('ul');

  subjectMath.activity.forEach((activities, index, array) => {
    const liMath = document.createElement('li');
    liMath.innerHTML = activities;
    ulMath.appendChild(liMath);

    liMath.style.cssText = `
      margin-left: 2em;
    `;
  });

  mathContainer.appendChild(ulMath);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  mathContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  mathTitle.style.marginLeft = mLS;
  mathSOTD.style.marginLeft = mLS;

  return mathContainer;
}

function renderEnglish (subjectEnglish) {
  const englishContainer = document.createElement('div');
  englishContainer.classList.add('english-day');

  const englishTitle = document.createElement('p');
  const englishSOTD = document.createElement('p');

  englishTitle.innerHTML = `Dia: <strong>${subjectEnglish.date}</strong>`;
  englishSOTD.innerHTML = `Conteúdo do dia: <strong>${subjectEnglish.sotd}</strong>`;

  englishContainer.appendChild(englishTitle);
  englishContainer.appendChild(englishSOTD);

  const ulEnglish = document.createElement('ul');

  subjectEnglish.activity.forEach((activities, index, array) => {
    const liEnglish = document.createElement('li');
    liEnglish.innerHTML = activities;
    ulEnglish.appendChild(liEnglish);

    liEnglish.style.cssText = `
      margin-left: 2em;
    `;
  });

  englishContainer.appendChild(ulEnglish);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  englishContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  englishTitle.style.marginLeft = mLS;
  englishSOTD.style.marginLeft = mLS;

  return englishContainer;
}

function renderCareerFront (careerFront) {
  const frontContainer = document.createElement('div');
  frontContainer.classList.add('frontend-block');

  const frontTitle = document.createElement('p');
  const frontContent = document.createElement('p');

  frontTitle.innerHTML = `Dia: <strong>${careerFront.date}</strong>`;
  frontContent.innerHTML = `Conteúdo do dia: <strong>${careerFront.content}</strong>`;

  frontContainer.appendChild(frontTitle);
  frontContainer.appendChild(frontContent);

  // Cria uma lista para as atividades
  const ulFront = document.createElement('ul');

  careerFront.activity.forEach((activities, index, array) => {
    const liFront = document.createElement('li');
    liFront.innerHTML = activities;
    ulFront.appendChild(liFront);

    liFront.style.cssText = `
      margin-left: 2em;
    `;
  });

  frontContainer.appendChild(ulFront);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  frontContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  frontTitle.style.marginLeft = mLS;
  frontContent.style.marginLeft = mLS;

  return frontContainer;
}

// Função principal para renderizar todos os conteúdos do grammar no container. Fazer isso com os outros
function renderAllContent() {
  const holderContentGrammar = document.querySelector('.content-type-grammar');
  const holderContentMath = document.querySelector('.content-type-math');
  const holderContentEnglish = document.querySelector('.content-type-english');
  const holderContentFront = document.querySelector('.content-type-frontend');
  
  // Limpa qualquer conteúdo anterior
  // holderContentGrammar.innerHTML = '';

  // Percorre o array 'days' e renderiza cada dia
  subjectGrammar.forEach(subject => {
    const grammarEl = renderGrammar(subject);
    holderContentGrammar.appendChild(grammarEl);
  });

  subjectMath.forEach(subject => {
    const mathEl = renderMath(subject);
    holderContentMath.appendChild(mathEl);
  });

  subjectEnglish.forEach(subject => {
    const englishEl = renderEnglish(subject);
    holderContentEnglish.appendChild(englishEl);
  });

  careerFront.forEach(career => {
    const frontEl = renderEnglish(career);
    holderContentFront.appendChild(frontEl);
  });
}

// Quando a página carrega, chamamos a função de renderizar
document.addEventListener('DOMContentLoaded', () => {
  renderAllContent();
});
  