// Função para tocar a faixa de áudio quando determinado tecla é acionada pelo teclado
function playsong(e) {
    // Essa constante vai selecionar a faixa de áudio que contém o mesmo data-key que foi selecionado no teclado
    const audio = window.document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Essa constante vai selecionar o elemento <div></div> que contém o mesmo data-key que foi selecionado no teclado
    const button = window.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    button.classList.add('active');

    if (!audio) return; // Quando não é encontrado o áudio correspondente, a função é encerrada
    audio.currentTime = 0; // retorna o áudio ao início quando a tecla é pressionada repetidamente
    audio.play(); // o áudio é executado
}

// Função que remove a classe .active de cada elemento <div></div> que foi acionado pelo teclado
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // função encerra quando o transition não é um transform
    this.classList.remove('active');
}

// Evento que irá "ouvir" cada vez que uma tecla no teclado for selecionada
window.addEventListener('keydown', playsong);

// Essa constante cria um array com todos os elementos de classe .key
// Iremos percorrer o array para ouvir quando a transição do .key para .key .active terminar, finalizarmos a animação
const buttons = window.document.querySelectorAll('.key');
buttons.forEach(item => item.addEventListener('transitionend', removeTransition));