/*
    Função para selecionar um elemento HTML
    getElement('div') -> seleciona um elemento <div></div>
    getElement('.div') -> seleciona um elemento de classe div <div class="div"></div>
    getElement('#div') -> seleciona um elemento de ID div <div id="div"></div>
*/
function getElement(element) {
    return window.document.querySelector(element)
}

//Função para criar um novo elemento HTML
function newElement(element) {
    return window.document.createElement(element);
}

// Criando os elementos <span></span>
var clockFace = getElement('.clock-face');

for (var i = 1; i <= 12; i++) {
    var number = newElement('span');
    number.innerHTML = `${i}`;
    number.className = `number`;
    clockFace.appendChild(number);
}

// Pegando as <div></div> de hora, minutos e segundos
var clockHour = getElement('.clock-hour');
var clockMinute = getElement('.clock-minute');
var clockSecond = getElement('.clock-second');

// Função para dizer a hora
function setDate() {
    const horaAtual = new Date(); // a função Date() pega diversas informações do sistema, inclusive a hora! :)
    const hora = horaAtual.getHours(); // pegando a hora do sistema
    const minutos = horaAtual.getMinutes(); // pegando os minutos do sistema
    const segundos = horaAtual.getSeconds(); // pegando os segundos do sistema
    /* 
        Para transformar os segundos em graus:
        0% = 0deg
        100% = 360deg
        ( segundos / 60 ) -> teremos a porcentagem
        ( segundos / 60) * 360 -> teremos o valor em graus
        Assim, 30 segundos são 180 graus
    */

    const horaDeg = ((hora / 12) * 360) + 90; // Aqui dividimos por 12, pois são as 12h
    const minutosDeg = ((minutos / 60) * 360) + 90;
    const segundosDeg = ((segundos / 60) * 360) + 90; // Aqui adicionamos 90 porque nosso relógio inicia na posição 90 graus. Assim deixamos a posição do ponteiro correta

    clockHour.style.transform = `rotate(${horaDeg}deg)`;
    clockMinute.style.transform = `rotate(${minutosDeg}deg)`;
    // Fazendo a mudança da rotação dos ponteiros do relógio
    clockSecond.style.transform = `rotate(${segundosDeg}deg)`;
}

// Executando a função a cada segundo
setInterval(setDate, 1000);