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
        date: 'DD/MM/AAAA',
        gitPushCount: '1° Push',
        study: [
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        gitPushCount: '1° Push',
        study: [
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
            `Fiz isso, isso e isso`,
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
