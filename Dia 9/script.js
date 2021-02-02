function makeGreen() {
    const p = window.document.querySelector('p');
    p.style.color = 'blue';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolado
const nome = 'Elisete';
console.log('Hello! %s é meu nome', nome);

// Estilizado
console.log('%c30 dias de JS', 'background: yellow; font-size: 30px');

// Warning
console.warn('Oh, No!');

// Error
console.error('Oh, Shit!');

// Information
console.info('Em uma única ejaculação, a baleia-azul é capaz de liberar entre 30 e 40 litros de esperma');

// Assert
// Caso a condição seja verdadeira, nada aparece
console.assert(2 == "2", 'FALSO'); // Aqui retorna true
console.assert(2 === "2", 'FALSO'); // Aqui retorna false, mostrando a string 'FALSO'

// Limpar o console
console.clear();

// Visualidar elementos do DOM
const h1 = window.document.querySelector('h1');
console.log(h1); // Visualização do elemento HTML <h1> Content </h1>
console.dir(h1); // Visualização de todas as propriedades do elemento

// Agrupar elementos
const cachorros = [
    {
        nome: 'Lulu',
        idade: 2
    },
    {
        nome: 'Rex',
        idade: 4
    }
]
cachorros.forEach(cachorro => {
    //console.group(`${cachorro.nome}`); // Aqui retorna os nomes dos cachorros agrupados, com a setinha aberta
    console.groupCollapsed(`${cachorro.nome}`); // Aqui retorna com a setinha fechada
    console.log(`Este é ${cachorro.nome}`);
    console.log(`${cachorro.nome} tem ${cachorro.idade} anos`);
    console.groupEnd(`${cachorro.nome}`);
})

// Count
// Conta quantas vezes eu mostro o mesmo conteúdo, na mesma hora
console.count('JavaScript');
console.count('JS');
console.count('JS');
console.count('JavaScript');
console.count('JS');
console.count('JS');
console.count('JavaScript');

// Timing
// Quanto tempo leva determinada ação
console.time('fetching data');
fetch('https://api.github.com/users/lizvidotti91')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// Table
console.table(cachorros);