'use strict'

/* Não consegui encontrar uma forma menos "custosa" do que essa.
A ideia menos custosa seria: fazer um btn como class, agregando todas as modals. Depois, quando clicada, seria visto se elas contains('frontend') ou  contains('civil-services'). Caso sim, aquela lá é aberta */

const openModals = document.getElementsByClassName('open-modal');
const closeModals = document.getElementsByClassName('close-btn');

const openCloseContentGeneral = document.querySelector('.content-type-general');
const openCloseContentGrammar = document.querySelector('.content-type-grammar');
const openCloseContentMath = document.querySelector('.content-type-math');
const openCloseContentEnglish = document.querySelector('.content-type-english');
const openCloseContentFrontend = document.querySelector('.content-type-frontend');
const openCloseContentUniSystems = document.querySelector('.content-type-uni-systems');
const openCloseContentUniEco = document.querySelector('.content-type-uni-eco');
const openCloseContentGame = document.querySelector('.content-type-hobby-game');

/* Para abrir */
for (let i=0 ; i<openModals.length ; i++) {
    openModals[i].addEventListener('click', function () {
        if (openModals[i].classList.contains("general")) {
          openCloseContentGeneral.classList.remove('hidden')
        }
        else if (openModals[i].classList.contains("frontend")) {
          openCloseContentFrontend.classList.remove('hidden')

        } else if (openModals[i].classList.contains("grammar")) {
          openCloseContentGrammar.classList.remove('hidden');

        } else if (openModals[i].classList.contains("math")) {
          openCloseContentMath.classList.remove('hidden');

        } else if (openModals[i].classList.contains("english")) {
          openCloseContentEnglish.classList.remove('hidden');

        } else if (openModals[i].classList.contains("subject-1")) {
          openCloseContentUniSystems.classList.remove('hidden');

        } else if (openModals[i].classList.contains("subject-2")) {
          openCloseContentUniEco.classList.remove('hidden');

        } else if (openModals[i].classList.contains("gamedev")) {
          openCloseContentGame.classList.remove('hidden');
        }
    });
}

/* Para fechar */
for (let k=0 ; k<closeModals.length ; k++) {  
    closeModals[k].addEventListener('click', function () {
        if (!openCloseContentGeneral.classList.contains('hidden')) {
          openCloseContentGeneral.classList.add('hidden');

        } else if (!openCloseContentFrontend.classList.contains('hidden')) {
          openCloseContentFrontend.classList.add('hidden');

        } else if (!openCloseContentGrammar.classList.contains('hidden')) {
          openCloseContentGrammar.classList.add('hidden');
            
        } else if (!openCloseContentMath.classList.contains('hidden')) {
          openCloseContentMath.classList.add('hidden');
            
        } else if (!openCloseContentEnglish.classList.contains('hidden')) {
          openCloseContentEnglish.classList.add('hidden');

        } else if (!openCloseContentUniSystems.classList.contains('hidden')) {
          openCloseContentUniSystems.classList.add('hidden');

        } else if (!openCloseContentUniEco.classList.contains('hidden')) {
          openCloseContentUniEco.classList.add('hidden');

        } else if (!openCloseContentGame.classList.contains('hidden')) {
          openCloseContentGame.classList.add('hidden');
        }
    });
}


/* Colocação do conteúdo */

// Variáveis para certos momentos
let ilovepdf = `<a href="https://www.ilovepdf.com/pt" target="_blank" style="color: black; text-decoration: underline">nesse site</a>`;
let playlist = `<a href="https://www.youtube.com/playlist?list=PLrT2fbyJrAIctd7zNUsdPakIllX2lhrzo" target="_blank" style="color: black; text-decoration: underline">essa playlist</a>`;
let brackeys = `<a href="https://www.youtube.com/@Brackeys" target="_blank" style="color: black; text-decoration: underline">Brackeys</a>`;

let videoTag = `
  <video autoplay="true" controlslist="nofullscreen nodownload" loop heigh="250px" width="250px"">
    <source src="assets/videos/initial-steps.mkv">
  </video>
`;

let udemy = `
  <a href="https://github.com/nathanmontt/JSZH" target="_blank" style="color: black; text-decoration: underline">aqui</a>
`;

const subjectGeneral = [
    {
        date: "19/03/2025",
        sotd: "Busca de conteúdo",
        activity: [
            `&rightarrow; Como ainda estou um pouco perdido, já que essa é a minha primeira tentativa de concurso, resolvi ler o edital e ir atrás do conteúdo <strong>1 por 1</strong> de acordo com o que diz no mesmo.`,
        ],
    }
];

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
        date: "",
        sotd: "",
        activity: [
            ``,
        ],
    }
];

const subjectEnglish = [
    {
        date: "",
        sotd: "",
        activity: [
            ``,
        ],
    }
];

const careerFront = [
    {
        date: "25/03/2025",
        content: "Javascript",
        activity: [
            `Iniciando "tudo" sobre Javascript com um curso da Udemy. O link do projeto e do processo do meu estudo pode ser visto ${udemy}.`,
        ]
    },
    {
        date: "26/03/2025",
        content: "JSZH",
        activity: [
            `Ainda no meio do projeto. Esse vai me ajudar a realmente crescer e não ficar estagnado apenas no básico.`,
        ]
    },
    {
        date: "27/03/2025",
        content: "JSZH - Continuação",
        activity: [
            `Ainda no projeto. Entendi sobre a tag <strong>object</strong> e como ela pode me ajudar a colocar conteúdos de outros arquivos HTML sem precisar usar <strong>HTML Import</strong>.`,
        ]
    },
    {
        date: "28/03/2025",
        content: "JSZH - Continuação",
        activity: [
            `Ainda no projeto. Retirei a primeira <em>branch</em> criada. Não tinha necessidade de usá-la, e tive outras ideias sobre como encarar outros pontos importantes do projeto.`,
        ]
    },
    {
        date: "31/03/2025",
        content: "M³ - Parada",
        activity: [
            `O projeto M³ vai ficar um pouco parado. Vou focar no outro projeto aqui em questão e, no futuro, penso em voltar com este mencionado aqui.`,
        ]
    },
];

const uniSystems = [
    {
      date: "20/03/2025",
      content: "Sistemas Distribuídos, de Tanenbaum",
      activity: [
          `&rightarrow; Início do estudo. Ainda não saí do começo, mas pelo menos, comecei. Separei todos os capítulos ${ilovepdf}.`,
      ],
    },
    {
      date: "21/03/2025",
      content: "Sistemas Distribuídos, de Tanenbaum e Colourius",
      activity: [
          `&rightarrow; Estudos em andamento. Me esqueci de <em>commitar</em> mais cedo. A explicação do que foi estudado (o resumo em si) será colocado depois.`,
      ],
    },
    {
      date: "24/03/2025",
      content: "Sistemas Distribuídos, de Tanenbaum",
      activity: [
          `&rightarrow; Continuação dos estudos.`,
      ],
    },
    {
      date: "25/03/2025",
      content: "Sistemas Distribuídos, de Tanenbaum",
      activity: [
          `&rightarrow; Começando o capítulo 2 do livro: <strong>Arquiteturas</strong>`,
          `&rightarrow; Ainda no mesmo capítulo, mas passando para o tópico 2.2, onde comenta sobre <strong>Arquiteturas centralizadas e descentralizadas</strong>`,
      ],
    },
];

const uniEco = [
    {
        date: "21/03/2025",
        content: "Informações",
        activity: [
            `&rightarrow; Professor doente. Pegou liçensa de <strong>2 semanas</strong>. Aulas começam dia <strong>24/03/2025</strong>.`,
        ],
    }
];

const hobbyGame = [
  {
      date: "23/03/2025",
      content: "Primeiros Passos em Godot",
      activity: [
          `&rightarrow; Tinha resolvido dar uma parada, mas voltei para não tentar perder o costume de estudo pelos jogos. Comecei os estudos por ${playlist}. Não cheguei perto de terminar, mas ${brackeys} sempre foi e sempre será um ótimo professor para <em>gamedev</em>.`,
      ]
  },
  {
      date: "24/03/2025",
      content: "Progresso",
      activity: [
          `&rightarrow; Seguindo o vídeo do ${brackeys}, consegui meu primeiro resultado.`,
          `${videoTag}`,
      ]
  },
  {
      date: "27/03/2025",
      content: "Pausa",
      activity: [
          `&rightarrow; Pausa nos estudos de games.`,
      ]
  },
];


// Variáveis para estilo
let totalMargin = `margin: .5em 1em 0 2em;`;
function renderGeneral (subjectGeneral) {
  /* Criando uma div e adicionando uma classe a mesma
  Essa criação vai ser necessária para adicionar todo o conteúdo dentro dela*/
  const generalContainer = document.createElement('div');
  generalContainer.classList.add('general-day');

  // Primeira interação com o conteúdo
  // Criando um título e anexando a data a ele
  // Dando append no conteúdo para que ele fique dentro do container
  const generalTitle = document.createElement('p');
  const generalSOTD = document.createElement('p');

  generalTitle.innerHTML = `Dia: <strong>${subjectGeneral.date}</strong>`;
  generalSOTD.innerHTML = `Conteúdo do dia: <strong>${subjectGeneral.sotd}</strong>`;

  generalContainer.append(generalTitle, generalSOTD);

  // Cria uma lista para as atividades
  const ulGeneral = document.createElement('ul');

  subjectGeneral.activity.forEach((activities, index, array) => {
    const liGeneral = document.createElement('li');
    liGeneral.innerHTML = activities;
    ulGeneral.appendChild(liGeneral);

    liGeneral.style.cssText = `
      ${totalMargin}
    `;
  });

  generalContainer.appendChild(ulGeneral);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  generalContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  generalTitle.style.marginLeft = mLS;
  generalSOTD.style.marginLeft = mLS;

  return generalContainer;
}

function renderGrammar (subjectGrammar) {
  const grammarContainer = document.createElement('div');
  grammarContainer.classList.add('grammar-day');

  const grammarTitle = document.createElement('p');
  const grammarSOTD = document.createElement('p');

  grammarTitle.innerHTML = `Dia: <strong>${subjectGrammar.date}</strong>`;
  grammarSOTD.innerHTML = `Conteúdo do dia: <strong>${subjectGrammar.sotd}</strong>`;

  grammarContainer.append(grammarTitle, grammarSOTD);

  const ulGrammar = document.createElement('ul');

  subjectGrammar.activity.forEach((activities, index, array) => {
    const liGrammar = document.createElement('li');
    liGrammar.innerHTML = activities;
    ulGrammar.appendChild(liGrammar);

    liGrammar.style.cssText = `
      ${totalMargin}
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

  mathContainer.append(mathTitle, mathSOTD);

  const ulMath = document.createElement('ul');

  subjectMath.activity.forEach((activities, index, array) => {
    const liMath = document.createElement('li');
    liMath.innerHTML = activities;
    ulMath.appendChild(liMath);

    liMath.style.cssText = `
      ${totalMargin}
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

  englishContainer.append(englishTitle, englishSOTD);

  const ulEnglish = document.createElement('ul');

  subjectEnglish.activity.forEach((activities, index, array) => {
    const liEnglish = document.createElement('li');
    liEnglish.innerHTML = activities;
    ulEnglish.appendChild(liEnglish);

    liEnglish.style.cssText = `
      ${totalMargin}
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

  frontContainer.append(frontTitle, frontContent);

  const ulFront = document.createElement('ul');

  careerFront.activity.forEach((activities, index, array) => {
    const liFront = document.createElement('li');
    liFront.innerHTML = activities;
    ulFront.appendChild(liFront);

    liFront.style.cssText = `
      ${totalMargin}
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

function renderUniSystems (uniSystems) {
  const uniSystemsContainer = document.createElement('div');
  uniSystemsContainer.classList.add('systems-block');

  const uniSystemsTitle = document.createElement('p');
  const uniSystemsContent = document.createElement('p');

  uniSystemsTitle.innerHTML = `Dia: <strong>${uniSystems.date}</strong>`;
  uniSystemsContent.innerHTML = `Conteúdo do dia: <strong>${uniSystems.content}</strong>`;

  uniSystemsContainer.append(uniSystemsTitle, uniSystemsContent);

  const ulUniSystems = document.createElement('ul');

  uniSystems.activity.forEach((activities, index, array) => {
    const liUniSystems = document.createElement('li');
    liUniSystems.innerHTML = activities;
    ulUniSystems.appendChild(liUniSystems);

    liUniSystems.style.cssText = `
      ${totalMargin}
    `;
  });

  uniSystemsContainer.appendChild(ulUniSystems);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  uniSystemsContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  uniSystemsTitle.style.marginLeft = mLS;
  uniSystemsContent.style.marginLeft = mLS;

  return uniSystemsContainer;
}

function renderUniEco (uniEco) {
  const uniEcoContainer = document.createElement('div');
  uniEcoContainer.classList.add('eco-block');

  const uniEcoTitle = document.createElement('p');
  const uniEcoContent = document.createElement('p');

  uniEcoTitle.innerHTML = `Dia: <strong>${uniEco.date}</strong>`;
  uniEcoContent.innerHTML = `Conteúdo do dia: <strong>${uniEco.content}</strong>`;

  uniEcoContainer.append(uniEcoTitle, uniEcoContent);

  const ulUniEco = document.createElement('ul');

  uniEco.activity.forEach((activities, index, array) => {
    const liUniEco = document.createElement('li');
    liUniEco.innerHTML = activities;
    ulUniEco.appendChild(liUniEco);

    liUniEco.style.cssText = `
      ${totalMargin}
    `;
  });

  uniEcoContainer.appendChild(ulUniEco);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  uniEcoContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  uniEcoTitle.style.marginLeft = mLS;
  uniEcoContent.style.marginLeft = mLS;

  return uniEcoContainer;
}

function renderHobbyGame (hobbyGame) {
  const hobbyGameContainer = document.createElement('div');
  hobbyGameContainer.classList.add('hobby-block');

  const hobbyGameTitle = document.createElement('p');
  const hobbyGameContent = document.createElement('p');

  hobbyGameTitle.innerHTML = `Dia: <strong>${hobbyGame.date}</strong>`;
  hobbyGameContent.innerHTML = `Conteúdo do dia: <strong>${hobbyGame.content}</strong>`;

  hobbyGameContainer.append(hobbyGameTitle, hobbyGameContent);

  const ulHobbyGame = document.createElement('ul');

  hobbyGame.activity.forEach((activities, index, array) => {
    const liHobbyGame = document.createElement('li');
    liHobbyGame.innerHTML = activities;
    ulHobbyGame.appendChild(liHobbyGame);

    liHobbyGame.style.cssText = `
      ${totalMargin}
    `;
  });

  hobbyGameContainer.appendChild(ulHobbyGame);
  
  const lastDiv = document.createElement('div');
  lastDiv.classList.add('line', 'mt-1', 'mr-05', 'mb-05', 'ml-05');
  hobbyGameContainer.appendChild(lastDiv);

  // Estilos
  let mLS = `1em`;
  hobbyGameTitle.style.marginLeft = mLS;
  hobbyGameContent.style.marginLeft = mLS;

  return hobbyGameContainer;
}

// Função principal para renderizar todos os conteúdos do grammar no container. Fazer isso com os outros
function renderAllContent() {
  const holderContentGeneral = document.querySelector('.content-type-general');
  const holderContentGrammar = document.querySelector('.content-type-grammar');
  const holderContentMath = document.querySelector('.content-type-math');
  const holderContentEnglish = document.querySelector('.content-type-english');
  const holderContentFront = document.querySelector('.content-type-frontend');
  const holderContentSystems = document.querySelector('.content-type-uni-systems');
  const holderContentEco = document.querySelector('.content-type-uni-eco');
  const holderContentGame = document.querySelector('.content-type-hobby-game');
  
  // Limpa qualquer conteúdo anterior
  // holderContentGrammar.innerHTML = '';

  // Percorre os array e renderiza cada dia
  subjectGeneral.forEach(subGen => {
    const generalEl = renderGeneral(subGen);
    holderContentGeneral.appendChild(generalEl);
  });

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
    const frontEl = renderCareerFront(career);
    holderContentFront.appendChild(frontEl);
  });

  uniSystems.forEach(systems => {
    const systemsEl = renderUniSystems(systems);
    holderContentSystems.appendChild(systemsEl);
  });

  uniEco.forEach(eco => {
    const ecoEl = renderUniEco(eco);
    holderContentEco.appendChild(ecoEl);
  });

  hobbyGame.forEach(hobby => {
    const hobbyGameEl = renderHobbyGame(hobby);
    holderContentGame.appendChild(hobbyGameEl);
  });
}

// Quando a página carrega, chamamos a função de renderizar
document.addEventListener('DOMContentLoaded', () => {
  renderAllContent();
});
  