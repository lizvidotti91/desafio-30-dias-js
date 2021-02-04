const pressionados = [];
const palavraSecreta = 'js30';

window.addEventListener('keyup', (e) => {
    pressionados.push(e.key);
    pressionados.splice(-palavraSecreta.length - 1, pressionados.length - palavraSecreta.length);
    if (pressionados.join('').includes(palavraSecreta)) {
        document.querySelector('body').style.backgroundColor = 'whitesmoke';
        document.querySelector('.container').style.color = 'black';
        cornify_add();
    }
});