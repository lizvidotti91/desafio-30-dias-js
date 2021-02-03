const player = window.document.querySelector('.player');

const video = player.querySelector('.video');
const progress = player.querySelector('.progress');
const progressBarra = player.querySelector('.progress-barra');
const playToggle = player.querySelector('.play-toggle');
const skipButtons = player.querySelectorAll('.skip');
const playerSlides = player.querySelectorAll('.player-slide');
const buttonFullScreen = player.querySelector('.fullScreen');

// Função para dar play/pause no video
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function trocarBotao() {
    const icone = this.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    playToggle.innerHTML = icone;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function slidePlayers() {
    video[this.name] = this.value;
}

function progressoBarra() {
    const porcentagem = (video.currentTime / video.duration) * 100;
    progressBarra.style.flexBasis = `${porcentagem}%`;
}

function clickProgressBar(e) {
    const momentoVideo = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = momentoVideo;
}

function openFullScreen() {
    player.requestFullscreen();
}

function closeFullScreen() {
    document.exitFullscreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('pause', trocarBotao);
video.addEventListener('play', trocarBotao);
video.addEventListener('timeupdate', progressoBarra);

playToggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => {
    button.addEventListener('click', skip);
});

playerSlides.forEach(button => {
    button.addEventListener('change', slidePlayers);
});
playerSlides.forEach(button => {
    button.addEventListener('mousemove', slidePlayers);
});

progress.addEventListener('click', clickProgressBar);
let mouseDown = false;
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mousedown', () => mouseUp = false);
progress.addEventListener('mousemove', (e) => mouseDown && clickProgressBar(e));

let fullscreen = false;
buttonFullScreen.addEventListener('click', () => {
    if (!fullscreen) {
        openFullScreen();
        fullscreen = true;
    }
});
buttonFullScreen.addEventListener('click', () => {
    if (fullscreen) {
        closeFullScreen();
        fullscreen = false;
    }
});