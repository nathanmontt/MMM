'use strict'

// Criação de objeto com infos sobre os estudos diários

/* Universidade */
const days = [
    {
        date: '2023-09-01',
        subject: 'Redes',
        study: [
            `Estudei redes`,
        ]
    },
];

/* Carreira */
const carrer = [
    {
        date: '2023-09-01',
        push: '1° Push',
        study: [
            `Fiz isso, isso e isso`,
        ]
    },
];

const hobby = [
    {
        date: '2023-09-01',
        subject: 'Beatmaking/Games',
        study: [
            `Fiz isso, isso, isso e mais isso`,
        ]
    },
];

/* Função que cria as divs */
function renderDay(day) {
    // Cria um container para a Uni, Carreira e Hobby
    const uniContainer = document.createElement('div');
    uniContainer.classList.add('day-block');
  
    // Cria um título com a data
    const dayTitle = document.createElement('h2');
    dayTitle.textContent = `Dia: ${day.date}`;
    uniContainer.appendChild(dayTitle);
  
    // Cria a lista <ul> para as atividades
    const ul = document.createElement('ul');
    day.study.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        ul.appendChild(li);
    });
  
    uniContainer.appendChild(ul);
  
    return uniContainer;
}

// Função responsável por adicionar os containers dentro do container principal
function renderAllDays() {
    const container = document.getElementById('days-container');
    
    // Limpa qualquer conteúdo anterior
    container.innerHTML = '';
  
    // Percorre o array 'days' e renderiza cada dia
    days.forEach(day => {
        const dayElement = renderDay(day);
        container.appendChild(dayElement);
    });
}

// Antes de tudo, carregamos o container principal com os conteúdos dentro
document.addEventListener('DOMContentLoaded', () => {
    renderAllDays();
});