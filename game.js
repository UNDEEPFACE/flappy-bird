const gameContainer =
document.querySelector("#gameContainer");
const bird = document.querySelector("#bird");
const pipeContainer =
document.querySelector("#pipeContainer");

let birdTop = 50;
let birdLeft = 50;
let gravity = 2;

function updateBird() {
    birdTop += gravity;
    bird.style.top = birdTop + "px";
    bird.style.left = birdLeft + "px";
}

setInterval(updateBird, 50);

let birdY = 200;
let birdSpeed = 0;

document.addEventListener("keydown",function(event){
    if (event.code === "Space") {
        birdSpeed = -7;
    }
})

function updateBird(){
    birdSpeed += 1;
    birdY += birdSpeed;
    bird.style.top = birdY + "px";
}

setInterval(function() {
    updateBird();
    updateBackground();
},50);

const gameContainer =
document.querySelector("#gameContainer");
const bird = document.querySelector("#bird");
const pipeContainer =
document.querySelector("#pipeContainer");

let birdTop = 50;
let birdLeft = 50;
let gravity = 2;

const pipe = document.createElement("div");
pipe.classList.add("pipe");
pipe.style.top = "0px";
pipe.style.right = "0px";
pipeContainer.appendChild(pipe);

function updateBird(){
    birdTop += gravity;
    bird.style.top = birdTop + "px";
    bird.style.left = birdLeft + "px";

    const birdRect = bird.getBoundingClientRect();
    const pipeRect = pipe.getBoundingClientRect();

    if(birdRect.right > pipeRect.left &&
        birdRect.left < pipeRect.right &&
        birdRect.bottom > pipeRect.top &&
        birdRect.top < pipeRect.bottom){
            console.log("collision detected!");
        }
}

setInterval(updateBird, 50);

const gameContainer =
document.querySelector("#gameContainer");
const bird = document.querySelector("#bird");
const pipeContainer =
document.querySelector("#pipeContainer");
const scoreElement =
document.querySelector("#score");

let birdTop = 50;
let birdLeft = 50;
let gravity = 2;
let score = 0;

const pipe = document.createElement("div");
pipe.classList.add("pipe");
pipe.style.top = "0px";
pipe.style.right = "0px";
pipeContainer.appendChild(pipe);

function updateBird() {
    birdTop += gravity;
    bird.style.top = birdTop + "px";
    bird.style.left = birdLeft + "px";
    const birdRect = bird.getBoundingClientRect();
    const pipeRect = pipe.getBoundingClientRect();
    if (birdRect.right > pipeRect.left &&
        birdRect.left < pipeRect.right &&
        birdRect.bottom > pipeRect.top &&
        birdRect.top < pipeRect.bottom) {
            console.log("collision detected!");
        }
        
        if (birdRect.right > pipeRect.right) {
            score++;
            scoreElement.innerHTML = "Score: " +score;
        }
}

setInterval(updateBird, 50);

const gameContainer =
document.querySelector("#gameContainer");
const bird = document.querySelector("#bird");
const pipeContainer =
document.querySelector("#pipeContainer");
const scoreElement =
document.querySelector("#score");

let birdTop = 50;
let birdLeft = 50;
let gravity = 2;
let score = 0;

const pipes = [];

function createPipe() {
    const pipe = document.createElement("div");
    pipe.classList.add("pipe");
    const top = Math.floor(Math.random()*
    (gameContainer.offsetHeight - 200)) + 50;
    pipe.style.top = top + "px";
    pipe.style.right = "0px";
    pipeContainer.appendChild(pipe);
    pipes.push(pipe);
}

function updateBird() {
    birdTop += gravity;
    bird.style.top = birdTop + "px";
    bird.style.left = birdLeft + "px";
    const birdRect = bird.getBoundingClientRect();
    for (const pipe of pipes) {
        const pipeRect = pipe.getBoundingClientRect();
        if (birdRect.right > pipeRect.left &&
            birdRect.left < pipeRect.right &&
            birdRect.bottom > pipeRect.top &&
            birdRect.top < pipeRect.bottom) {
                console.log("collision detected!");
            }
            
            if (birdRect.right > pipeRect.right) {
                score++;
                scoreElement.innerHTML = "Score: " +score;
            }
    }
}

setInterval(updateBird, 50);
setInterval(createPipe, 1500);

let gameOver = false;

function updateBird() {
    if (gameOver) {
        return;
    }
    
    birdTop += "gravity";
    bird.style.top = birdTop + "px";
    bird.style.left = birdLeft + "px";
    const birdRect = bird.getBoundingClientRect();
    for (const pipe of pipes) {
        const pipeRect = pipe.getBoundingClientRect();
        if (birdRect.right > pipeRect.left &&
            birdRect.left < pipeRect.right &&
            birdRect.bottom > pipeRect.top &&
            birdRect.top < pipeRect.bottom) {
                console.log("game over");
                gameOver = true;
            }

            if (birdRect.right > pipeRect.right) {
                score++;
                scoreElement.innerHTML = "Score:" + score
            }
        }
    }

    const restartButton =
    document.createElement("button");
    restartButton.innerHTML = "Restart";
    restartButton.style.display = "none";
    restartButton.style.position = "absolute";
    restartButton.style.top = "50%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(restartButton);

    restartButton.addEventListener("click",function() {
        gameOver = false;
        restartButton.style.display = "none";
        score = 0;
        scoreElement.innerHTML = "Score: 0";
        birdTop = birdStartTop;
        birdLeft = birdStartLeft;
        bird.style.top = birdTop + "px";
        bird.style.left = birdLeft + "px"; 
    });

    function updateBird() {
        if (gameOver) {
            console.log("game over");
            restartButton.style.display = "block";
            return;
        }
    }

    let move_speed = 3, grativy = 0.5;
    let bird = document.querySelector('.bird');
    let img = document.getElementById('bird-1');
    let sound_point = new Audio('sounds effect/point.mp3');
    let sound_die = new Audio('sounds effect/die.mp3');    

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //jump
        velocityY = -6;

        //reset game
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}
