const pessoas = [
    { nome: "Elisete", nasc: 1991 },
    { nome: "Cristina", nasc: 1952 },
    { nome: "Vilobaldo", nasc: 1947 },
    { nome: "Pedro", nasc: 1994 },
    { nome: "Gisele", nasc: 1990 },
    { nome: "Débora", nasc: 1992 }
]

const frases = [
    { texto: "A vingança nunca é plena. Mata a alma e a envenena", id: 110 },
    { texto: "As pessoas boas devem amar seus inimigos", id: 111 },
    { texto: "Se você é jovem ainda, amanhã velho será. A menos que o coração sustente a juventude que nunca morrerá.", id: 112 },
    { texto: "Se quiser chegar a ser alguém, devore os livros.", id: 113 },
    { texto: "Quem come tudo e não divide nada, acaba com a barriga inchada", id: 114 },
    { texto: "Quando a fome aperta, a vergonha afrouxa", id: 115 },
    { texto: "Ninguém deve se guiar pelo o que as pessoas parecem e sim pelo que elas são", id: 116 },
    { texto: "Para o amor não há barreiras, todas se rompem!", id: 117 },
    { texto: "Não existe um mau trabalho, o mal é ter que trabalhar", id: 118 }
]

/*
    Array.prototype.some()
    Descobrir se há algum idoso (maior de 60 anos) na lista de pessoas
*/

const isOld = pessoas.some(person => ((new Date()).getFullYear()) - person.nasc >= 60);
console.log(`Há alguma pessoa com mais de 60 anos na lista? ${isOld}`);

/*
    Array.prototype.every()
    Descobrir se todos são idosos (maiores de 60 anos) na lista de pessoas
*/

const isAllOld = pessoas.every(person => ((new Date()).getFullYear()) - person.nasc >= 60);
console.log(`Todas as pessoas da lista são maiores que 60 anos? ${isAllOld}`);

/*
    Array.prototype.find()
    Ao contrário do filter(), que retorna um array com todos os elementos filtrados, o find() retorna apenas o primeiro elemento encontrado
    Encontrar o comentário com id = 115
*/

const buscaID = frases.find(number => number.id == 115);
console.log(`A frase com ID igual a 115 é:`);
console.table(buscaID); // retorna uma tabela

/*
    Array.prototype.findIndex()
    Retorna o index do elemento dentro de um array
    [elementOne, elementTwo, elementThree]
    elementOne -> index 0
    elementTwo -> index 1
    elementThree -> index 2
*/

const findID = frases.findIndex(number => number.id == 115);
console.log(`O valor do index da frase de ID igual a 115 é: ${findID}`);

// Aqui eu deleto a frase que está na posição/index 6
console.log(`Retirando o elemento de index ${findID}, temos o novo array:`)
frases.splice(findID, 1);
console.table(frases);