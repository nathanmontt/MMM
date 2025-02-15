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
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
    {
        date: 'DD/MM/AAAA',
        subject: 'Redes',
        study: [
            `Estudei redes`,
            `Estudei redes2 `,
            `Estudei redes   4`,
        ]
    },
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
        subject: 'Game, Beatmaking, Content, etc...',
        study: [
            `Fiz isso, isso, isso e mais isso`,
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
    
    textMainTitle.textContent = `Dia ${uniDay.date}`;
    subjectOfTheDay.textContent = `${uniDay.subject}`;
    
    uniContainer.appendChild(textMainTitle);
    uniContainer.appendChild(subjectOfTheDay);
    // textMainTitle.style.fontFamily = 'Cormorant Garamond, serif';
    
    // Cria a tag <ul> para as atividades
    const ulHolderItemStudy = document.createElement('ul');
    uniDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.textContent = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
    });
    
    uniContainer.appendChild(ulHolderItemStudy);
    
    return uniContainer;
}

/* Função que cria as tags pra CARRER */
function renderCarrerDay(carrerDay) {
    const carrerContainer = document.createElement('div');
    carrerContainer.classList.add('carrer-day-block');
    
    const textMainTitle = document.createElement('h2');
    const gitPushOfTheDay = document.createElement('p');

    textMainTitle.textContent = `Dia ${carrerDay.date}`;
    gitPushOfTheDay.textContent = `${carrerDay.gitPushCount}`;
    
    carrerContainer.appendChild(textMainTitle);
    carrerContainer.appendChild(gitPushOfTheDay);
  
    const ulHolderItemStudy = document.createElement('ul');
    carrerDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.textContent = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
    });
  
    carrerContainer.appendChild(ulHolderItemStudy);
  
    return carrerContainer;
}

/* Função que cria as tags pra HOBBY */
function renderHobbyDay(hobbyDay) {
    const hobbyContainer = document.createElement('div');
    hobbyContainer.classList.add('hobby-day-block');
    
    const textMainTitle = document.createElement('h2');
    const hobbySubjectOfTheDay = document.createElement('p');
    
    textMainTitle.textContent = `Dia ${hobbyDay.date}`;
    hobbySubjectOfTheDay.textContent = `${hobbyDay.subject}`;
    
    hobbyContainer.appendChild(textMainTitle);
    hobbyContainer.appendChild(hobbySubjectOfTheDay);
    
    const ulHolderItemStudy = document.createElement('ul');
    hobbyDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.textContent = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
    });
    
    hobbyContainer.appendChild(ulHolderItemStudy);
    
    return hobbyContainer;
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

// Evento para abrir os acordeões
const stAccordion = document.querySelector('.one-a');
const ndAccordion = document.querySelector('.two-a');
const rdAccordion = document.querySelector('.three-a');

const seeMoreStudyOne = document.querySelector('.overlay-btn-cta-one');
const seeMoreStudyTwo = document.querySelector('.overlay-btn-cta-two');
const seeMoreStudyThree = document.querySelector('.overlay-btn-cta-three');

stAccordion.addEventListener('click', function () {
    containerUni.classList.toggle('hidden');

    if (containerUni.classList.contains('hidden')) {
        seeMoreStudyOne.classList.add('hidden');
    } else {
        seeMoreStudyOne.classList.remove('hidden');
    }
});

ndAccordion.addEventListener('click', function () {
    containerCarrer.classList.toggle('hidden');

    if (containerCarrer.classList.contains('hidden')) {
        seeMoreStudyTwo.classList.add('hidden');
    } else {
        seeMoreStudyTwo.classList.remove('hidden');
    }
});

rdAccordion.addEventListener('click', function () {
    containerHobby.classList.toggle('hidden');

    if (containerHobby.classList.contains('hidden')) {
        seeMoreStudyThree.classList.add('hidden');
    } else {
        seeMoreStudyThree.classList.remove('hidden');
    }
});

