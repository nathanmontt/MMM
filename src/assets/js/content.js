'use strict'

// Criação de objeto com infos sobre os estudos diários

/* Universidade */
const university = [
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
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
        ]
    },
];

/* Hobby */
const hobby = [
    {
        date: 'DD/MM/AAAA',
        study: [
            `Fiz isso, isso, isso e mais isso`,
        ]
    },
];

/* Função que cria as tags */
function renderUniDay(day) {
    /* Cria um container para a Uni, Carreira e Hobby.
    Dentro desse container, é aonde vai entrar o conteúdo que queremos mostrar*/
    const uniContainer = document.createElement('div');

    /* Criamos e adicionamos classes às divs de cima */
    uniContainer.classList.add('uni-day-block');
  
    // Criam-se tags que armazenam algumas infos. inciais
    const textMainTitle = document.createElement('h2');
    const subjectOfTheDay = document.createElement('p');

    textMainTitle.textContent = `Dia ${day.date}`;
    subjectOfTheDay.textContent = `${day.subject}`;
    
    uniContainer.appendChild(textMainTitle);
    uniContainer.appendChild(subjectOfTheDay);
    // textMainTitle.style.fontFamily = 'Cormorant Garamond, serif';
  
    // Cria a tag <ul> para as atividades
    const ulHolderItemStudy = document.createElement('ul');
    day.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.textContent = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
    });
  
    uniContainer.appendChild(ulHolderItemStudy);
  
    return uniContainer;
}

function renderCarrearDay(day) {
    /* Cria um container para a Uni, Carreira e Hobby.
    Dentro desse container, é aonde vai entrar o conteúdo que queremos mostrar*/
    const carrerContainer = document.createElement('div');

    /* Criamos e adicionamos classes às divs de cima */
    carrerContainer.classList.add('carrer-day-block');
  
    // Criam-se tags que armazenam algumas infos. inciais
    const textMainTitle = document.createElement('h2');
    const gitPushOfTheDay = document.createElement('p');

    textMainTitle.textContent = `Dia ${day.date}`;
    subjectOfTheDay.textContent = `${day.subject}`;
    
    uniContainer.appendChild(textMainTitle);
    uniContainer.appendChild(subjectOfTheDay);
    // textMainTitle.style.fontFamily = 'Cormorant Garamond, serif';
  
    // Cria a tag <ul> para as atividades
    const ulHolderItemStudy = document.createElement('ul');
    day.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.textContent = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
    });
  
    uniContainer.appendChild(ulHolderItemStudy);
  
    return uniContainer;
}

// Função responsável por adicionar os containers dentro do container principal
function renderAllDays() {
    const container = document.getElementById('days-container');
    
    // Limpa qualquer conteúdo anterior
    container.innerHTML = '';
  
    // Percorre o array 'days' e renderiza cada dia
    university.forEach(day => {
        const dayElement = renderUniDay(day);
        container.appendChild(dayElement);
    });
}

// Antes de tudo, carregamos o container principal com os conteúdos dentro
document.addEventListener('DOMContentLoaded', () => {
    renderAllDays();
});