'use strict'

// Criação de objeto com infos sobre os estudos diários

/* Universidade */
const days = [
    {
        date: '2023-09-01',
        activities: [
            'Estudei 2h de Lógica de Programação',
            'Li 10 páginas de um livro sobre Carreira de Web Dev'
        ]
    },
];

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