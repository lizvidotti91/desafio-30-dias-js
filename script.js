var list = window.document.querySelector('.list');

function newElement(element) {
    return window.document.createElement(element);
}

for (var i = 1; i <= 30; i++) {
    var newItem = newElement('li');
    newItem.innerHTML = `
            <a href="./Dia ${i}/index.html">Dia ${i}</a>
        `;
    list.appendChild(newItem);
}