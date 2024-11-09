const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOverScreen = document.querySelector('.game-over-screen');
const scoreDisplay = document.querySelector('.score')
let score = 0;
let canScore = true;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};


const startGameLoop = () => {
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const cloudsPosition = clouds.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;

            mario.src = "./images/game-over.png";
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
            gameOverScreen.classList.remove('hidden');
            scoreDisplay.classList.remove('score');
            scoreDisplay.classList.add('finalScore');
        }

        //utiliza a variavel canScore como controle para evitar mais de uma pontuação por cano
        if (pipePosition < 0 && canScore) { 
            score++;
            scoreDisplay.textContent = `Score: ${score}`; 
            canScore = false;
        }
        if (pipePosition > 120) {
            canScore = true; 
        }

    }, 10);

};


const restartGame = () => {
    gameOverScreen.classList.add('hidden'); 


    pipe.style.animation = '';
    pipe.style.left = '';

    mario.style.animation = '';
    mario.style.bottom = '';

    clouds.style.animation = '';
    clouds.style.left = '';


 mario.style.animation = '';
 mario.style.bottom = '0px';
 mario.style.width = '155px';
 mario.style.marginLeft = '0px'; 
mario.src = 'dashGame/images/mario.gif';




    scoreDisplay.classList.remove('finalScore');
    scoreDisplay.classList.add('score');
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`; 
    canScore = true; 

    startGameLoop();
};


startGameLoop();


document.addEventListener("keydown", () => {
    if (gameOverScreen.classList.contains('hidden')) {
        jump();
    } else {
        restartGame();
    }
});
