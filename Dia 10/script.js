// Selecionando todos os inputs do tipo checkbox e guardando numa NodeList
const checkBoxes = window.document.querySelectorAll('input[type="checkbox"]');

// Variável para saber o último input que foi selecionado
let lastChecked;

function clicouInput(e) {
    // Aqui declaramos a variável para saber quais são os inputs entre o primeiro e o segundo elemento sekecionados
    let entreCheckboxes = false;

    // Condição: se estamos com a tecla shift pressionada E temos um segundo elemento clicado
    if (e.shiftKey && this.checked) {
        // Percorremos nosso Array
        checkBoxes.forEach(checkBox => {
            // Condição: se o elemento do array for o mesmo que clicamos E o elemento do array for o último elemento clicado
            if (checkBox === this || checkBox === lastChecked) {
                // !true == false
                // !false == true
                // Então, os elementos entre o primeiro e o segundo elemento clicados serão true, e os outros serão false
                entreCheckboxes = !entreCheckboxes;
            }

            // Se entreCheckboxes for verdadeiro
            if (entreCheckboxes) {
                // O elemento será selecionado
                checkBox.checked = true;
            }
        })
    }
    // Aqui armazenamos o primeiro elemento clicado, que vai servir para a nossa verificação
    lastChecked = this;
}

// Aqui chamamos nossa função acima!
// Percorrendo nosso array
checkBoxes.forEach(checkBox => {
    // A cada evento de click em um de nossos inputs, é acionada a função clicouInput()
    checkBox.addEventListener('click', clicouInput);
});