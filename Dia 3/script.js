// o querySelectorAll retorna um objeto, ou um NodeList
const inputs = window.document.querySelectorAll('input');

// A função irá selecionar o novo valor que estamos passando no input
function handleUpdate() {
    const sufixo = this.dataset.sizing || ""; // Caso o input não tenha o data-sizing no HTML

    // Aqui vamos selecionar todo o nosso documento, e alterar as propriedades dos nossos inputs
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufixo);
}

// Como a constante inputs é uma NodeList, vamos usar o forEach() para pegarmos o valor de um único input por vez
inputs.forEach(item => item.addEventListener('change', handleUpdate));
// O evento mouse move vai pegar o valor do input enquanto movemos a barra, ao invés de pegar o valor apenas quando soltamos o mouse -> para o input do tipo range
inputs.forEach(item => item.addEventListener('mousemove', handleUpdate));