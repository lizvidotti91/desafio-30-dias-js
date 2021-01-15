// Pegando os arquivos JSON pelas URLs
const municipios = 'https://raw.githubusercontent.com/lizvidotti91/Municipios-Brasileiros/main/json/municipios.json';
const estados = 'https://raw.githubusercontent.com/lizvidotti91/Municipios-Brasileiros/main/json/estados.json';

// Selecionando o input do tipo search e o elemento <ul></ul> respectivamente, pelo ID e pela classe
const searchInput = document.querySelector('#search');
const results = document.querySelector('.results');

// Aqui inicializo dois arrays vazios
const cidades = [];
const listaUF = [];

// Com a função fetch(), passo o array do JSON para nossas arrays inicializadas acima
fetch(municipios).then((evento) => evento.json()).then(dados => cidades.push(...dados));
fetch(estados).then(evento => evento.json()).then(dados => listaUF.push(...dados));

// Aqui fazemos a busca dos termos digitados no input no arquivo json do município
function busca(palavra) {
    return cidades.filter(element => {
        const regex = new RegExp(palavra, "gi");
        return element.nome.match(regex);
    })
}

function display() {
    // Aqui pegamos o valor escrito no input e filtramos nossa array de municípios para encontrar valores correspondentes
    const array = busca(this.value, cidades);
    // Aqui vamos comparar os valores do código UF entre a array dos municípios com a array dos estados, procurar valores correspondentes e juntar em outra array o nome do município e seu estado correspondente
    const op = array.map((e, i) => {
        let temp = listaUF.find(element => element.codigo_uf === e.codigo_uf);
        if (temp.uf) {
            e.uf = temp.uf;
        }
        return e;
    })
    // Aqui colocamos os valores da cidade, estado, alttitude e longitude dentro de um elemento <li></li>
    // Percorrendo o array, cada posição do array será um elemento da lista, com esses três valores
    const lista = op.map(item => {
        const regex = new RegExp(this.value, 'gi');
        const nomeMun = item.nome.replace(regex, `<span class="light">${this.value}</span>`);
        const nomeUF = item.uf.replace(regex, `<span class="light">${this.value}</span>`);
        return `<li>
                    <span>${nomeMun}, ${nomeUF}.</span>
                     <span>lat: ${item.latitude}; long: ${item.longitude}</span>
                </li>`
    }).join('');
    results.innerHTML = lista;
}

// Os eventos de mudança, quando clicamos fora do input, ou quando digitamos cada letra, são "ouvidos" e disparam a função display(), que é executada
searchInput.addEventListener('change', display);
searchInput.addEventListener('keyup', display);