'use strict'

// Criação de objeto com infos sobre os estudos diários
/* Universidade */
const university = [
    {
        date: '17/02/2025',
        subject: 'Redes',
        study: [
            `Início dos estudos`
        ]
    },
];

/* Carreira */
const carrer = [
    {
        date: '04/02/2025',
        gitPushCount: 'Quantidade de Push: 2',
        study: [
            `1° Push:`,
            `Adição de um arquivo .txt para dar início à ideia de um projeto de 'tracking' futuro;`,
            `Início à estilização do menu (navbar);`,
            
            `2° Push:`,
            `Ajustado o display do menu;`,
            `Adição de interações a partir de pseudo-classes;`,
        ],
    },
    {
        date: '05/02/2025',
        gitPushCount: 'Quantidade de Push: 3',
        study: [
            `1° Push:`,
            `Alterações do dia anterior foram usadas. Reinício do arquivo _hero.scss para a nova parte do projeto;`,
            `Adição de variável em _utilities.scss;`,
            
            `2° Push:`,
            `Estruturação do esqueleto do _hero.scss;`,
            `Adição de uma div para armazenas imagem de fundo;`,
            
            `3° Push:`,
            `Troca de nomes de algumas variáveis, e adição de outras;`,
            `Adição do slogan no index.html, na área do hero;`,
            `Mudança do estilo no nome da marca;`,
            `Retirada do slogan;`,
            `Mudança no valor de variáveis;`,
            `Adição de variáveis de margin;`,
            `Adição de ícones para o hero;`,
            `Adição de interações a partir de pseudo-classes;`,
            `ESTUDO:`,
            `git add -u: faz o mesmo que o git add . (para adicionar todas as stages files), porém NÃO adiciona as files novas, com o símbolo de U (o símbolo é de acordo com o que aparece no VSCode);`
        ]
    },
    {
        date: '06/02/2025',
        gitPushCount: 'Quantidade de Push: 4',
        study: [
            `1° Push:`,
            `Alterações no esqueleto do HTML. Retirada do conteúdo antigo;`,
            `Adição do product-content, onde os produtos vendidos na loja aparecerão para o usuários;`,
            `Correção dos estilos do _hero.scss e em outros;`,
            `Exclusão de comentários desnecessários;`,
            `Adição de uma nova fonte;`,
            `Adição de uma classe contendo uma pseudo-classe para o hover em certas divs;`,
            
            `2° Push:`,
            `Início do main-content;`,
            `Adição do product-content, onde os produtos vendidos na loja aparecerão para o usuários;`,
            `Adição do esqueleto dos containers dentro do main-content;`,
            
            `3° Push:`,
            `Começo da estruturação do esqueleto do HTML do main-content;`,
            `Estruturação do esqueleto do main-content no SCSS;`,
            
            `4° Push:`,
            `Ajeitando o esqueleto do content-new-arrivals;`,
        ]
    },
    {
        date: '07/02/2025',
        gitPushCount: 'Quantidade de Push: 3',
        study: [
            `1° Push:`,
            `Push das alterações que não foram ao push ontem;`,
            `Exlusão de imagens;`,
            `Modificação da forma como os produtos se encaixam;`,
            
            `2° Push:`,
            `Modificações no READ.ME do projeto;`,
            `Modificação no esqueleto do HTML principal;`,
            `Modificação no esqueleto do SCSS de _main-content;`,
            `Adição de estilo para as modificações acima;`,
            
            `3° Push:`,
            `Início da estruturação nos arquivos SCSS;`,
            `Adição de variáveis;`,
            `Testes para deploy: no Vercel e Netlify, as background-image não aparecem. Por isso os testes;`,
            `Troca de nome de imagens;`,
        ]
    },
    {
        date: '08/02/2025 e 09/02/2025',
        gitPushCount: 'Quantidade de Push: 1',
        study: [
            `1° Push:`,
            `Adição de um novo projeto e modificações no README e adição da licença;`,
        ]
    },
];

/* Hobby */
const hobby = [
    {
        date: 'DD/MM/AAAA',
        subject: 'Ainda nada foi feito',
        study: [
        ]
    },
];

/* Função que cria as tags pra UNI */
function renderUniDay(uniDay) {
    /* Cria um container para a Uni, Carreira e Hobby.
    Dentro desse container, é aonde vai entrar o conteúdo que queremos mostrar*/
    const uniContainer = document.createElement('div');

    /* Criamos e adicionamos classes às divs de cima */
    uniContainer.classList.add('uni-day-block');
    
    // Criam-se tags que armazenam algumas infos. inciais
    const textMainTitle = document.createElement('h2');
    const subjectOfTheDay = document.createElement('p');
    
    textMainTitle.innerHTML = `Dia ${uniDay.date}`;
    subjectOfTheDay.innerHTML = `<strong>${uniDay.subject}</strong>`;
    
    uniContainer.appendChild(textMainTitle);
    uniContainer.appendChild(subjectOfTheDay);
    
    // Cria a tag <ul> para as atividades
    const ulHolderItemStudy = document.createElement('ul');
    uniDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.innerHTML = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
        liItemStudy.style.marginBottom = '.2em';
    });
    
    uniContainer.appendChild(ulHolderItemStudy);
    
    uniStyles();
    // Estilos que não serão colocados na outra função por motivos de serem locais
    ulHolderItemStudy.style.textIndent = '1em';
    
    return uniContainer;
}

/* Função de estilo para o conteúdo da UNIVERSIDADE */
let mainFont = "Cormorant Garamond, serif";
function uniStyles () {
    // MEASURES
    containerUni.style.padding = '1em';
    
    // FONTS
    containerUni.style.fontFamily = `${mainFont}`;
    
    // OTHERS
    
}

/* Função que cria as tags pra CARRER */
function renderCarrerDay(carrerDay) {
    const carrerContainer = document.createElement('div');
    carrerContainer.classList.add('carrer-day-block');
    
    const textMainTitle = document.createElement('h2');
    const gitPushOfTheDay = document.createElement('p');

    textMainTitle.innerHTML = `Dia ${carrerDay.date}`;
    gitPushOfTheDay.innerHTML = `<strong>${carrerDay.gitPushCount}</strong>`;
    
    carrerContainer.appendChild(textMainTitle);
    carrerContainer.appendChild(gitPushOfTheDay);
  
    const ulHolderItemStudy = document.createElement('ul');
    carrerDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.innerHTML = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
        liItemStudy.style.marginBottom = '.2em';
    });
  
    carrerContainer.appendChild(ulHolderItemStudy);

    carrerStyles()
    // Estilos que não serão colocados na outra função por motivos de serem locais
    ulHolderItemStudy.style.textIndent = '1em';
    return carrerContainer;
}

function carrerStyles () {
    // MEASURES
    containerCarrer.style.padding = '1em';
    
    // FONTS
    containerCarrer.style.fontFamily = `${mainFont}`;
    
    // OTHERS
    
}

/* Função que cria as tags pra HOBBY */
function renderHobbyDay(hobbyDay) {
    const hobbyContainer = document.createElement('div');
    hobbyContainer.classList.add('hobby-day-block');
    
    const textMainTitle = document.createElement('h2');
    const hobbySubjectOfTheDay = document.createElement('p');
    
    textMainTitle.innerHTML = `Dia ${hobbyDay.date}`;
    hobbySubjectOfTheDay.innerHTML = `<strong>${hobbyDay.subject}</strong>`;
    
    hobbyContainer.appendChild(textMainTitle);
    hobbyContainer.appendChild(hobbySubjectOfTheDay);
    
    const ulHolderItemStudy = document.createElement('ul');
    hobbyDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.innerHTML = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
        liItemStudy.style.marginBottom = '.2em';
    });
    
    hobbyContainer.appendChild(ulHolderItemStudy);

    // Estilos que não serão colocados na outra função por motivos de serem locais
    ulHolderItemStudy.style.textIndent = '1em';

    hobbyStyles();
    return hobbyContainer;
}

function hobbyStyles () {
    // MEASURES
    containerHobby.style.padding = '1em';
    
    // FONTS
    containerHobby.style.fontFamily = `${mainFont}`;
    
    // OTHERS
    
}

// Função responsável por adicionar os containers dentro dos seus devidos containers
const containerUni = document.getElementById('uni-container-info');
const containerCarrer = document.getElementById('carrer-container-info');
const containerHobby = document.getElementById('hobby-container-info');

function renderAllDays() {    
    // Limpa qualquer conteúdo anterior
    // containerUni.innerHTML = '';
    // containerCarrer.innerHTML = '';
    // containerHobby.innerHTML = '';
  
    // Percorre todos os arrays e renderiza cada dia
    university.forEach(uniDay => {
        const dayUniElem = renderUniDay(uniDay);
        containerUni.appendChild(dayUniElem);
    });

    carrer.forEach(function renderAllCarrerDays (carrerDay) {
        const dayCarrerElement = renderCarrerDay(carrerDay);
        containerCarrer.appendChild(dayCarrerElement);
    });

    hobby.forEach(function renderAllHobbyDays (hobbyDay) {
        const dayHobbyEl = renderHobbyDay(hobbyDay);
        containerHobby.appendChild(dayHobbyEl);
    })
}

// Antes de tudo, carregamos o container principal com os conteúdos dentro
document.addEventListener('DOMContentLoaded', () => {
    renderAllDays();
});
