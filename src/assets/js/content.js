'use strict'

// Adição de variáveis úteis para pesquisar caso seja necessário
const roadmapSite = '<a href="https://roadmap.sh/"  target="_blank">roadmap.sh</a>';
const gridGuide = `<strong><a href="https://css-tricks.com/snippets/css/complete-guide-grid/"  target="_blank">Complete Guide to Grid</a></strong>`;

// Criação de objeto com infos sobre os estudos diários
/* Universidade */
const university = [
    {
        date: '17/02/2025',
        subject: 'Redes',
        study: [
            `Para início de estudos, organizei os livros que vão ser usados para estudo: KUROSE, James - Redes de Computadores e a Internet: Uma abordagem top-down.Pearson (2013) e Redes de Computadores - Tanenbaum`,

            `Iniciei com a seção 1.1. Não terminei, mas pelo menos, comecei. Foi melhor do que ficar parado. Amanhã, continuarei!`,
        ]
    },
];

/* Carreira */
const career = [
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
    {
        date: '10/02/2025',
        gitPushCount: 'Quantidade de Push: 1',
        study: [
            `1° Push:`,
            `Correção do README.md;`,
            `Adição do esqueleto do index.html;`,
            `Adição dos arquivos necessários para estilização;`,
            `Adição da estilização do header;`,
            `Pré-término da estilização do header. Ainda falta a funcionalidade;`,
        ]
    },
    {
        date: '11/02/2025',
        gitPushCount: 'Quantidade de Push: 10',
        study: [
            `1° Push:`,
            `Início da formalização da hero-section;`,
            `Adição de estilo no hero-content;`,

            `2° Push:`,
            `Mudança no README.md;`,
            `Correção de estilos em outras files;`,
            `Adição de fontes e testes;`,
            `Adição da cor principal;`,
            
            `3° Push:`,
            `Mudança em nome de variáveis e continuação na estilização;`,
            `Mudança no tipo da fonte, cores e adição de um link a mais no header. O link será usado para criar um DARK/LIGHT MODE;`,
            `Adição de ícone para funcionamento futuro do DARK/LIGHT MODE;`,
            
            `4° Push:`,
            `Alterações no README;`,
            
            `5° Push:`,
            `Tentativa de fazer animações. Ainda muito cedo para isso. Ficar no básico e melhorar nele;`,
            
            `6° Push:`,
            `Iniciando interação da cor do menu;`,
            `Não entendia do porque usava arrow function em forEach. Resolvi testar trocar para função normal. Não sabia como. Testei. Deu certo;`,
            
            `7° Push:`,
            `Alterações no README;`,
            
            `8° Push:`,
            `Tentativa de conserto de conflitos na parte de scroll. Um deles não havia testado, que é a troca de cor da logo, mas logo após testes, tudo OK;`,
            `Correção de conflito na parte do scroll;`,
            `Adição do content geral para debbug e para verificar se o scroll agora funciona;`,
            `Adição da file _content.scs;`,
            
            `9° Push:`,
            `Alterações no README;`,
            
            `10° Push:`,
            `Linkando as opções do menu para dentro do projeto;`,
            `Mexendo nas funcionalidades do svg arrow down;`,
            
        ]
    },
    {
        date: '12/02/2025',
        gitPushCount: 'Quantidade de Push: 4',
        study: [
            `1° Push:`,
            `Alterações no README;`,
            
            `2° Push:`,
            `Organização do arquivo .txt até colocá-lo dentro do projeto como conteúdo;`,
            `Continuação de testes na funcionalidade do DARK/LIGHT MODE;`,
            
            `3° Push:`,
            `Início da seção About, mas a menor. A maior terá uma página dedicada;`,
            `Colocação do esqueleto do estilo do about-one;`,
            
            `4° Push:`,
            `Mudança no nome do about-one para about. Será a página de estilos dedicada à seção Sobre;`,
            `Utilização de variáveis de outros projetos para o atual;`,
        ]
    },
    {
        date: '13/02/2025',
        gitPushCount: 'Quantidade de Push: 3',
        study: [
            `1° Push:`,
            `Alterações no README (colocação de sites e artigos para resolição dos conflitos);`,
            
            `2° Push:`,
            `Continuação do about-small;`,
            `Criação de um novo arquivo, hover.js, para a adição de "animações" em JS (como o prórpio nome já diz, hover). Nela, vou tentar armazenar apenas essas interações com o user através do mouse;`,
            `Troca de posição das tags de script para dentro da head. Era uma tentativa de resolver o problema já citado no repositório do projeto;`,
            `Mudanças na posiçao do "explorar", além de adicionar animações no mesmo;`,
            `Correção por parte do tipo de display do "botão" "explorar";`,
            
            `3° Push:`,
            `Início do primeiro curso de Responsive Web Design da freeCodeCamp.org. De 71 aulas do LEARN HTML BY BUILDING A CAT PHOTO APP, foram feitas 71;`,
            `Mudança em nome de files, organização de alguns arquivos de estilo e (quase) finalização da lógica por trás da colocação do conteúdo diário de forma dinâmica;`,
            `Criação de um novo arquivo para estilização dos conteúdos diários;`,
        ]
    },
    {
        date: '14/02/2025',
        gitPushCount: 'Quantidade de Push: 4',
        study: [
            `1° Push:`,
            `Continua da edição dos objetos do JS;`,
            `Adiciona mais objetos e mais separações no HTML para organizar os estudos em seção;`,
            
            `2° Push:`,
            `Finalização da parte dinâmica do conteúdo diário;`,
            `Adição de elementos no HTML para confecção do acordeão;`,
            
            `3° Push:`,
            `Processo da lógica para o acordeão;`,
            `Adição de uma nova variável no _utilities;`,
            `Início da estilização do conteúdo dinâmico;`,
            `Adição de estilo no HTML (diretamente nele);`,
            
            `4° Push:`,
            `Organização e começo da funcionalidade para o acordeão;`,
            `Finalização da organização estática;`,
            `Início da criação do mecanismo de acordeão;`,
            `Finalização do mecanismo de acordeão;`,
        ]
    },
    {
        date: '15/02/2025',
        gitPushCount: 'Quantidade de Push: 1',
        study: [
            `1° Push:`,
            `Continuação nas modificações do JS e suas interatividades;`,
            `Idealização da ideia da modal window. Veio do pretexto de não deixar tudo em um local apenas e fazer com que ficasse mais organizado, não tudo acumulado;`,
            `Exclusão da ideia da página de SOBRE, levando apenas a possibilidade de fazer o Sobre na primeira página (como se fosse uma landing page);`,
            `Adição de mais estilos na parte do conteúdo dinâmico;`,
            `Adição, dentro do module, de uma nova classe para botão. Mais especificamente, um botão para acessar todo o conteúdo;`,
            `Término da adição do acordeão;`,
        ]
    },
    {
        date: '16/02/2025',
        gitPushCount: 'Quantidade de Push: 10',
        study: [
            `1° Push:`,
            `Início da ideia de modal window. O autor não sabe como fazer, mas antes de procurar uma resposta, vai achar uma solução;`,
            `Adição de um arquivo apenas para o modal;`,
            `Modificar o nome das variáveis da seção de ABOUT, pois estão com variáveis ainda referenciando um SOBRE pequeno (já foi decidido que isso vai mudar), modificar o nome da variável onde o MAIS (+) está;`,
            
            `2° Push:`,
            `Concretização da ideia da modal window. Falta implantar o conteúdo dentro dela. O problema é o id, e como farei para que eu consiga encaixar o mesmo conteúdo dentro de outro container;`,
            `Retirada da modal window. Tornou-se um pouco complicado da forma da execução. E falta conhecimento sobre como injetar o conteúdo dinamicamente dentro da modal;`,


            `3° Push:`,
            `Persistência na ideia da modal window, mas de outra forma. Utilizar os "botões" já existentes para, assim que clicarmos, abrir uma modal windown;`,
            `Finalização da modal window (pelo menos, apenas para a parte dos conteúdos de faculdade);`,
            
            `4° Push:`,
            `Adição da lógica para todos os outros containers;`,
            `Tentativa em testes, pois o útltimo container não está abrindo em uma modal window;`,
            
            `5° Push:`,
            `Término (oficial) da lógica da modal window;`,
            
            `6° Push:`,
            `Correção de bugs por parte do hover.js;`,
            `Adição do SOBRE em index.html;`,
            
            `7° Push:`,
            `Inicialização da estilização por JS;`,
            `Mudança de textContent para innerHTML, pois é melhor. Como o projeto é algo local, não preciso me preocupar com ataques em XSS (Cross Site-Scripting);`,
            `Adição de alguns conteúdos dentro do 'conteúdo';`,
            
            `8° Push:`,
            `Correção de bugs;`,
            `Criação do componente footer e seu estilo;`,
            
            `9° Push:`,
            `Alterações no README;`,
            
            `10° Push:`,
            `Mudança do nome de arquivos;`,
            `Começo da responsividade. Començando pelos conteúdos;`,
            `Término da resposividade;`,
            `Término do footer e sua responsividade;`,
        ]
    },
    {
        date: '17/02/2025',
        gitPushCount: 'Quantidade de Push: 6',
        study: [
            `1° ao 5° Push:`,
            `Introdução dos conteúdos tirados do .txt inicial;`,
            
            `6° Push:`,
            `Correção de bug para deploy;`,
            
            `8° e 9° Push:`,
            `Correção de bug. Ainda faltam alguns para correção;`,
            
            `10° Push:`,
            `Alterações no README;`,
        ]
    },

    {
        date: '19/02/2025',
        gitPushCount: 'Quantidade de Push: 8',
        study: [
            `1° Push:`,
            `Início de diversos projetos. Criação de um novo reposítório vindo do site ${roadmapSite}. Os projetos, de forma completa, vem da aba de Frontend. O intuito de começar eles é pelo motivo de me sentir estagnado. Então estou me (re)forçando a fazer e, mesmo que me sinta desconfortável, continuar até conseguir minha primeira oportunidade de emprego;`,

            `2° Push:`,
            `Alterações no projeto E³;`,

            `3° e 4° Push:`,
            `Início do projeto Single-Page CV e esqueleto do mesmo;`,
            `Alterações no projeto E³ (correções no HTML);`,

            `5° Push:`,
            `Término do projeto e criação do README.md;`,

            `6° Push:`,
            `Adição da licença MIT License;`,

            `7° Push:`,
            `Adição de um arquivo CSS (nada de SCSS, SASS. Apenas CSS Vanila);`,
            `Organização de arquivos;`,
            `Correção do HTML (falta de atenção, na verdade. Não vai acontecer novamente)`,
            
            `8° Push:`,
            `Início de um novo projeto. Criação de um novo reposítório vindo do site ${roadmapSite}. Apenas o esqueleto HTML foi requerido;`,
        ]
    },
    {
        date: '20/02/2025',
        gitPushCount: 'Quantidade de Push: 6',
        study:
        [
            `1° Push:`,
            `Adição do REAME.md, LICENSE e um arquivo HTML (apenas com o básico) ao novo projeto. Provável que o esqueleto não dará (mais devido ao horário mesmo [00:41hr]);`,
            
            `2° Push:`,
            `Alterações no README;`,

            `3° Push:`,
            `Adição do esqueleto HTML;`,

            `4° Push:`,
            `Alterações no README;`,
            
            `5° Push:`,
            `Continuação do projeto. Ou seja, estilização;`,
            
            `6° Push:`,
            `Alterações no README;`,
        ]
    },
    {
        date: '21/02/2025',
        gitPushCount: 'Quantidade de Push: 9',
        study:
        [
            `1° Push:`,
            `Término do projeto pela parte de MOBILE FIRST;`,

            `2° Push:`,
            `Alterações no README;`,
            
            `3° Push:`,
            `Término completo do projeto;`,
            
            `4° Push:`,
            `Início do projeto de Changelog;`,
            
            `5° Push:`,
            `Adição da Licença;`,
            
            `6° Push:`,
            `Adição e alteração no README;`,

            `7° Push:`,
            `Adição do esqueleto do projeto de Changelog Component;`,
        ]
    },
    {
        date: '22/02/2025',
        gitPushCount: 'Quantidade de Push: 5',
        study:
        [
            `1° Push:`,
            `Adição, no projeto, da posição do changelog component ser sempre central;`,
            
            `2° Push:`,
            `Aplicando testes para a lógica do changelog;`,
            
            `3° Push:`,
            `Modificando as cores da line do changelog antes de partir para os "tópicos" (as bolinhas no meio);`,

            `4° Push:`,
            `Alterações no README;`,
        ]
    },
    {
        date: '23/02/2025',
        gitPushCount: 'Quantidade de Push: 15',
        study:
        [
            `1° Push:`,
            `Modificação no botão;`,
            
            `2° Push:`,
            `Término do projeto;`,
            
            `3° Push:`,
            `Alterações no README do projeto de Changelog Component;`,
            
            `4° Push:`,
            `Criação do projeto Testimonial Cards;`,
            
            `5° Push:`,
            `Inserção de arquivos para o projeto;`,
            
            `6° Push:`,
            `Alterações no projeto anterior ao Testimonial no arquivo de CSS;`,

            `7° Push:`,
            `Criação do README;`,
            
            `8° Push:`,
            `Criação da LICENSE;`,
            
            `9° Push:`,
            `Adição do CSS reset no projeto de Testimonial Cards;`,
            
            `10° Push:`,
            `Adição do esqueleto em HTML, adição de imagens para as profile pictures, correção da palavra career, e não carrer, e adição da pasta de icons;`,

            `11° Push:`,
            `Alterações no README;`,
            
            `12° Push:`,
            `Alterações no README: adição de links úteis para pesquisa e que me ajudaram no processo de estudo (e ajudam até hoje);`,
            
            `13° Push:`,
            `Adição de uma licença ao projeto;`,

            `14° Push:`,
            `Testes na forma de como o layout vai funcionar. A princípio, a ideia era utilizar o Grid Layout, porém ficou mais simples quando o display: flex; se mostrou mais eficiente (ainda sim, em Links Úteis, o ${gridGuide} vai continuar como um artigo muito útil);`,
        ]
    },
    {
        date: '24/02/2025',
        gitPushCount: 'Quantidade de Push: 4',
        study:
        [
            `1° Push:`,
            `Adição do primeiro card;`,
            
            `2° Push:`,
            `Término do segundo card;`,
            
            `3° Push:`,
            `Término do terceiro card;`,
        ]
    },
    {
        date: '25/02/2025',
        gitPushCount: 'Quantidade de Push: 8',
        study:
        [
            `1° Push:`,
            `Início de um novo repositório. O projeto em questão é um Date Picker, e nesse caso será feito apenas em HTML e CSS. No futuro, de acordo com o projeto, poderá ser implementado o Javascript;`,
            
            `2° Push:`,
            `Adição e organização das pastas;`,
            
            `3° Push:`,
            `Criação de um README.md`,
            
            `4° Push:`,
            `Criação de uma LICENSE`,

            `5° Push:`,
            `Alterações no README;`,
            
            `6° Push:`,
            `Alterações no README;`,
            
            `7° Push:`,
            `Término do projeto;`,
            
            `8° Push:`,
            `Projeto NÃO terminado. Entendi o enunciado errado e terei de refazer;`,
        ]
    },
    {
        date: '26/02/2025',
        gitPushCount: 'Quantidade de Push: 5',
        study:
        [
            `1° Push:`,
            `Nome do projeto ficou errado. Correção do mesmo;`,

            `2° Push:`,
            `Alterações no README;`,

            `3° Push:`,
            `Reestruturação do esqueleto do HTML do Datepicker;`,
            
            `4° Push:`,
            `Reestruturação do esqueleto do CSS para o projeto;`,
        ]
    },
    {
        date: '27/02/2025',
        gitPushCount: 'Quantidade de Push: 6',
        study:
        [
            `1° Push:`,
            `Término do projeto;`,
            
            `2° Push:`,
            `Criação de um novo projeto;`,

            `3° Push:`,
            `Alocação de arquvivos/diretório para o projeto`,
            
            `4° Push:`,
            `Criação de um README.md`,
            
            `5° Push:`,
            `Criação de uma LICENSE`,
        ]
    },
    {
        date: '28/02/2025',
        gitPushCount: 'Quantidade de Push: 10',
        study:
        [
            `1° Push:`,
            `Alterações no README;`,
            
            `2° Push:`,
            `Colocação do esqueleto básico no HTML para o projeto;`,
            
            `3° Push:`,
            `Alterações no README;`,
            
            `4° Push:`,
            `Alterações no arquivo .css;`,
            
            `5° Push:`,
            `Alterações no README;`,
            
            `6° Push:`,
            `Alterações no README (colocação de novos links úteis);`,
            
            `7° Push:`,
            `Finalização do projeto (1° parte);`,
            
            `8° Push:`,
            `Adição de ARIA;`,
            
            `9° Push:`,
            `Finalização do projeto (completo);`,
        ]
    },
    {
        date: '01/03/2025',
        gitPushCount: 'Quantidade de Push: 6',
        study:
        [
            `1° Push:`,
            `Criação de um novo projeto;`,
            
            `2° Push:`,
            `Adição de uma LICENSE;`,

            `3° Push:`,
            `Adição de um README;`,
        ]
    },
    {
        date: '02/03/2025',
        gitPushCount: 'Quantidade de Push: 4',
        study:
        [            
            `1° Push:`,
            `Adição de pasta e imagens para o projeto;`,

            `2° Push:`,
            `Alterações no README;`,
            
            `3° Push:`,
            `Estudo do grid para entender como colocar as imagens no layout pedido;`,
        ]
    },
    {
        date: '03/03/2025',
        gitPushCount: 'Quantidade de Push: 3',
        study:
        [            
            `1° Push:`,
            `Alterações no README (E³);`,

            `2° Push:`,
            `Alterações no README (Image-Grid-Layout);`,
        ]
    },
    {
        date: '04/03/2025',
        gitPushCount: 'Quantidade de Push: 8',
        study:
        [            
            `1° Push:`,
            `Entendimento da lógica por trás do grid layout. Já foi resolvido o problema de como fazer. Agora falta "encaixar";`,

            `2° Push:`,
            `Término do projeto;`,

            `3° Push:`,
            `Alterações no README;`,
            
            `4° Push:`,
            `Criação de um novo projeto (Tooltip UI);`,
            
            `5° Push:`,
            `Adição de uma LICENSE;`,
            
            `6° Push:`,
            `Adição de um README;`,
            
            `7° Push:`,
            `Término do projeto;`,
            
            `8° Push:`,
            `Alterações no README;`,
            
            `9° Push:`,
            `Criação de um novo projeto ();`,
            
            `10° Push:`,
            `Adição de uma LICENSE;`,
            
            `11° Push:`,
            `Adição de um README;`,
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

/* Cursos */
const course = [
    {
        date: '18/02/2025',
        course: 'Curso Crie um site simples usando HTML, CSS e JavaScript',
        study: [
            `Finalizei o curso apresentado no título. Ele tem duração de aproximadamente 2 horas, além de ser um curso introdutório e para iniciante;`,
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
    containerUni.style.padding = '1em';
    containerUni.style.fontFamily = `${mainFont}`;
}

/* Função que cria as tags pra CARRER */
function renderCareerDay(careerDay) {
    const careerContainer = document.createElement('div');
    careerContainer.classList.add('carrer-day-block');
    
    const textMainTitle = document.createElement('h2');
    const gitPushOfTheDay = document.createElement('p');

    textMainTitle.innerHTML = `Dia ${careerDay.date}`;
    gitPushOfTheDay.innerHTML = `<strong>${careerDay.gitPushCount}</strong>`;
    
    careerContainer.appendChild(textMainTitle);
    careerContainer.appendChild(gitPushOfTheDay);
  
    const ulHolderItemStudy = document.createElement('ul');
    careerDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.innerHTML = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
        liItemStudy.style.marginBottom = '.2em';
    });
  
    careerContainer.appendChild(ulHolderItemStudy);

    carrerStyles()
    // Estilos que não serão colocados na outra função por motivos de serem locais
    ulHolderItemStudy.style.textIndent = '1em';
    return careerContainer;
}

function carrerStyles () {
    containerCareer.style.padding = '1em';
    containerCareer.style.fontFamily = `${mainFont}`;
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
    containerHobby.style.padding = '1em';
    containerHobby.style.fontFamily = `${mainFont}`;
}

/* Função que cria as tags pra COURSE */
function renderCourseDay(courseDay) {
    const courseContainer = document.createElement('div');
    courseContainer.classList.add('course-day-block');
    
    const textMainTitle = document.createElement('h2');
    const courseOfTheDay = document.createElement('p');
    
    textMainTitle.innerHTML = `Dia ${courseDay.date}`;
    courseOfTheDay.innerHTML = `<strong>${courseDay.course}</strong>`;
    
    courseContainer.appendChild(textMainTitle);
    courseContainer.appendChild(courseOfTheDay);
    
    const ulHolderItemStudy = document.createElement('ul');
    courseDay.study.forEach(activity => {
        const liItemStudy = document.createElement('li');
        liItemStudy.innerHTML = activity;
        ulHolderItemStudy.appendChild(liItemStudy);
        liItemStudy.style.marginBottom = '.2em';
    });
    
    courseContainer.appendChild(ulHolderItemStudy);

    // Estilos que não serão colocados na outra função por motivos de serem locais
    ulHolderItemStudy.style.textIndent = '1em';

    courseStyles();
    return courseContainer;
}

function courseStyles () {
    containerCourse.style.padding = '1em';
    containerCourse.style.fontFamily = `${mainFont}`;
}

// Função responsável por adicionar os containers dentro dos seus devidos containers
const containerUni = document.getElementById('uni-container-info');
const containerCareer = document.getElementById('carrer-container-info');
const containerHobby = document.getElementById('hobby-container-info');
const containerCourse = document.getElementById('course-container-info');

function renderAllDays() {  
    // Percorre todos os arrays e renderiza cada dia
    university.forEach(uniDay => {
        const dayUniElem = renderUniDay(uniDay);
        containerUni.appendChild(dayUniElem);
    });

    career.forEach(function renderAllCareerDays (careerDay) {
        const dayCareerElement = renderCareerDay(careerDay);
        containerCareer.appendChild(dayCareerElement);
    });

    hobby.forEach(function renderAllHobbyDays (hobbyDay) {
        const dayHobbyEl = renderHobbyDay(hobbyDay);
        containerHobby.appendChild(dayHobbyEl);
    });

    course.forEach(function renderAllCourseDays (courseDay) {
        const dayCourseEl = renderCourseDay(courseDay);
        containerCourse.appendChild(dayCourseEl);
    });
}

// Antes de tudo, carregamos o container principal com os conteúdos dentro
document.addEventListener('DOMContentLoaded', () => {
    renderAllDays();
});