// tag HTML que apresentara uma lista dos projetos: 
const PROJ_CONTAINER = document.querySelector('.projects_container');

// Dados de acesso de um projeto:
const PROJETOS = [
    {
        'arquivo':'#',
        'logo':'website.png',
        'descricao':'Um link de teste para novos proetos',
        'nome':'TESTE'
    },
    {
        'arquivo':'#',
        'logo':'website.png',
        'descricao':'Um link de teste para novos proetos',
        'nome':'TESTE'
    },
    {
        'arquivo':'#',
        'logo':'website.png',
        'descricao':'Um link de teste para novos proetos',
        'nome':'TESTE'
    },
    {
        'arquivo':'#',
        'logo':'website.png',
        'descricao':'Um link de teste para novos proetos',
        'nome':'TESTE'
    }
]

// Contruindo uma item de apresentação com lik do projeto:
const listaProjetos = (projetos, container) => {
    projetos.forEach(proj => {
        container.innerHTML += `<a href="${proj.arquivo}" class="item"> <img src="./img/${proj.logo}" alt="${proj.descricao}"> <p>${proj.nome}</p> </a>`
    });
}


// Chama a função contrução da tag img:
listaProjetos(PROJETOS, PROJ_CONTAINER);