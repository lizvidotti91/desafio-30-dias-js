const canvas = window.document.querySelector('#container-canvas');
const contexto = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

contexto.strokeStyle = 'black';
contexto.lineJoin = 'round';
contexto.lineCap = 'round';
contexto.lineWidth = 10;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direcao = false;

function desenhar(e) {
    if (!isDrawing) return; // parar a função quando o mouse não estiver no evento mouse down
    contexto.strokeStyle = `hsl(${hue},100%,50%)`;
    contexto.beginPath();
    // o caminho da linha começa em:
    contexto.moveTo(lastX, lastY);
    // o caminho da linha termina em:
    contexto.lineTo(e.offsetX, e.offsetY);
    contexto.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // destructuring an array

    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (contexto.lineWidth >= 100 || contexto.lineWidth <= 10) {
        direcao = !direcao;
    }

    direcao ? contexto.lineWidth++ : contexto.lineWidth--;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', desenhar);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
