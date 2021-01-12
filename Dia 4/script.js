// DECLARAÇÃO DAS VARIÁVEIS

// Objeto
const actors = [
    { first: "Roberto", last: "Bolaños", year: 1929, passed: 2014 },
    { first: "Ramón", last: "Valdés", year: 1923, passed: 1988 },
    { first: "Florinda", last: "Meza", year: 1949, passed: '' },
    { first: "Carlos", last: "Villagrán", year: 1944, passed: '' },
    { first: "María Antonieta", last: "Nieves", year: 1950, passed: '' },
    { first: "Édgar", last: "Vivar", year: 1948, passed: '' },
    { first: "Rúben", last: "Aguirre", year: 1934, passed: 2016 },
    { first: "Angelines", last: "Fernández", year: 1922, passed: 1994 }
];

// Array
const people = ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Tom Felton", "Alan Rickman", "Bonnie Wright", "Matthew Lewis", "Maggie Smith", "Robie Coltrane", "Helena Carter", "Richard Harris", "Evanna Lynch", "Warwick Davis", "Emma Thompson", "Gary Oldman", "Alfie Enoch", "David Thewlis", "Oliver Phelps", "Harry Melling", "Julie Walters", "Richard Griffiths", "Fiona Shaw", "Devon Murray", "Scarlett Byrne", "Natalia Tena", "Katie Leung", "James Phelps"];

// Array
const lista = ["arroz", "feijão", "farinha", "arroz", "fubá", "farinha", "cenoura", "beterraba", "alface", "feijão", "batata", "alface", "tomate", "carne", "frango", "frango", "sardinha", "fubá", "cenoura", "beterraba", "cenoura", "cebola", "arroz"];

// APRENDENDO SOBRE AS FUNÇÕES

/*
    Array.prototype.filter()
    Filtrar os atores que nasceram nos anos 1920
    Retorna um novo array com a quantidade de itens que foram filtrados
*/
var anos20 = actors.filter(actor => actor.year >= 1920 && actor.year < 1930); // arrow function
/*
Essa função pode ser resumida na linha acima
function is20(actor) {
    if (actor.year >= 1920 && actor.year < 1930) {
        return true;
    } else {
        return false;
    }
}
*/
console.log('Atores nascidos nos anos 1920 a 1930:')
console.table(anos20); // aqui retorna uma tabela
//console.log(anos20); // aqui retorna um array

/*
    Array.prototype.map()
    Mostrar primeiro e último nomes de cada ator
    Retorna um array com a mesma quantidade de itens
*/

const nomes = actors.map(actor => `${actor.first} ${actor.last}`); // para cada objeto dentro de actors, concatenamos os valores de first e last
console.log('Lista com primeiro e segundo nome dos atores:')
console.log(nomes);

/*
    Array.prototype.sort()
    Ordenar os atores por data de nascimento, do mais NOVO para o mais VELHO
    Retorna uma array em nova ordem
*/
const ordenar = actors.sort((a, b) => a.year < b.year ? 1 : -1); // operador ternário
/*
    Essa função pode ser resumida na linha acima
    function ordemIdade(a, b) { // para a função sort, usamos dois parâmetros para comparar
        if (a.year < b.year) {
            return 1;
        } else {
            return -1;
        }
    }
*/
console.log('Atores ordenados do mais novo para o mais velho, segundo seu ano de nascimento:')
console.table(ordenar); // aqui retorna uma tabela

/*
    Array.prototype.map()
    Array.prototype.filter()
    Criar uma lista dos Boulevards que contém o termo "de" em qualquer parte do nome
*/
const list = window.document.querySelector('.lista'); // seleciono o elemento <ul></ul> com todos os elementos filhos
const item = Array.from(list.querySelectorAll('li')); // seleciono todos os elementos <li></li> dentro do elemento pai. Aqui, ele retorna uma NodeList com os elementos. A NodeList não permite o uso da função map, então converteremos ela para Array
const de = item.map(item => item.textContent).filter(item => item.includes('de')); // a função map retorna um array apenas com os nomes de todos os Boulevares da lista. Aplicando também a função filter, teremos um filtro dos nomes que apresentam o "de" em seu nome, e a lista fica apenas a estes itens
console.log('Lista dos Boulevares de Paris que possuem o termo "de" em qualquer parte do nome:')
console.log(de);

/*
    Array.prototype.sort()
    Ordenar os atores por anos vividos, do mais novo para o mais velho
    Retorna uma array em nova ordem
*/
// PEGANDO O ANO ATUAL DO SISTEMA
const date = new Date();
const atualYear = date.getFullYear();

const lived = actors.sort((a, b) => {
    var younger = a.passed == '' ? atualYear - a.year : a.passed - a.year;
    var older = b.passed == '' ? atualYear - b.year : b.passed - b.year;
    return younger > older ? 1 : -1;
});
console.log("Atores por anos vividos, do mais novo para o mais velho. Para os atores ainda vivos, considere o ano atual como parâmetro:")
console.table(lived);

/*
    Array.prototype.reduce()
    Mostrar o total de anos vividos pelos atores
    AQUI VAMOS PRECISAR FAZER UMA VERIFICAÇÃO SE O CAMPO PASSED CONTÉM UM NÚMERO OU ESTÁ VAZIO
*/
const totalYears = actors.reduce((total, actor) => {
    return (
        total + (actor.passed == '' ? atualYear - actor.year : actor.passed - actor.year)
        // aqui faço uma verificação com operador ternário para saber se a data de falecimento do ator está preenchida. Se ela estiver vazia, diminuo o ano atual da data de nascimento do ator; caso contrário, é só diminuir a data de falecimento da data de nascimento
    );
}, 0); // o zero aqui é para definir o valor de total
console.log(`Os atores da lista viveram, juntos, ${totalYears} anos`);

/*
    Array.prototype.sort()
    Ordenar o Array de pessoas em ordem alfabética, segundo o seu nome
*/
const names = people.sort((a, b) => {
    const [aFirst, aLast] = a.split(" "); // Como cada posição do Array é uma string "Nome Sobrenome", usamos o split para separar em duas strings "Nome" e "Sobrenome". o " " espaço vazio entre os dois nomes serve como ponto de separação
    const [bFirst, bLast] = b.split(" "); // estou separando em a e b porque iremos comparar de duas em duas pessoas da lista
    return aFirst > bFirst ? 1 : -1;
});
console.log("Organizando a lista de pessoas em ordem alfabética:")
console.log(names);

/*
    Array.prototype.reduce()
    Com a lista do mercado, vamos contar os nomes repetidos
*/

const cont = lista.reduce((object, item) => {
    if (!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {});
console.log("Itens da lista do mercado:")
console.log(cont);