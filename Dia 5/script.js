// A variável armazena uma Node List com os cinco elementos <li></li>
var items = window.document.querySelectorAll('.item');

function open() {
    // O this se refere ao item que recebeu o evento do mouse over (passar o mouse sobre o elemento)
    this.classList.toggle('active');
}

function close() {
    // O this se refere ao item que recebeu o evento do mouse out (o mouse sai de sobre o elemento)
    this.classList.remove('active');
}

// Aqui ele verifica cada elemento da Node List que recebeu o evento de mouse
// Toda vez que ocorre o evento do mouse, essas funções são disparadas
items.forEach((item) => item.addEventListener('mouseover', open));
items.forEach((item) => item.addEventListener('mouseout', close));