// tag HTML que recebera tag img para cada tecnologia:
const TEC_CONTAINER = document.querySelector('.tec_container');

// Lista do nome dos arquivos de imagem de cada tecnologia:
const TEC_LOGOS = [
    {
        'url':'html.png',
        'nome':'HTML'
    },
    {
        'url':'css.png',
        'nome':'CSS'
    },
    {
        'url':'javascript.png',
        'nome':'JavaScript'
    },
    {
        'url':'node.png',
        'nome':'Node.js'
    }
]

// Controis uma tag img e add a um container:
const listaTecnologias = (logos, container) => {
    logos.forEach(logo => {
        container.innerHTML += `<img src="./img/${logo.url}" alt="${logo.nome}" class="tec_item">`
    });
}


// Chama a função contrução da tag img:
listaTecnologias(TEC_LOGOS, TEC_CONTAINER);