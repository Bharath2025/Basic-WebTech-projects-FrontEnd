/*import Ball from "./ball.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');


let prev_time
function update(time) {
  if (prev_time != null) {
    const delta = time - prev_time
    ball.update(delta);
    computerPaddle.update(delta,ball.y);

    if (lose()){
        console.log("lost");
        ball.helper();
        computerPaddle.reset();
        scoreUpdate();
    }
    
  }
  prev_time = time
  window.requestAnimationFrame(update)

}

function scoreUpdate(){
    const rect=ball.rect();
    if(rect.right >= window.innerHeight ){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else{
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    
}
function lose()
{
    const rect=ball.rect();
    if(rect.right >= window.innerWidth || rect.left <= 0 ){
        return true;
    }
    return false;
}

// Event listener for the player paddle.
document.addEventListener('mousemove',(e)=>{
    playerPaddle.position = (e.y / window.innerHeight)*100;   // Coverting the unit of position to pixels to correctly adjust the player paddle to the mousemove.
})

window.requestAnimationFrame(update)*/


import Ball from "./ball.js"
import Paddle from "./paddle.js"

// Audio Sounds

const gameOverSound = new Audio('gameOver.mp3');
const BallHit = new Audio('ballCollision.wav');
const musicSound = new Audio('backgroundMusic.mp3');

const ball = new Ball(document.getElementById('ball'));
const player_paddle = new Paddle(document.getElementById("player-paddle"));
const Computer_paddle = new Paddle(document.getElementById("computer-paddle"));
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

var previous_time;
function update(time){

    //Activating the background music
    musicSound.play();

    if(previous_time!=null){
        const current_time = time;
        const delta = current_time - previous_time;
        ball.update(delta,[player_paddle.rect(),Computer_paddle.rect()]);
        Computer_paddle.update(delta,ball.y);
        //changing the background color with --hue varibale in css.
        const hue=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));

        document.documentElement.style.setProperty("--hue", hue +delta*0.01);
        if (lose()){
            musicSound.pause();
            gameOverSound.play();

            update_game();
        }
    }
    previous_time = time;

    
    window.requestAnimationFrame(update);
    
}


function lose(){
    const rect = ball.rect();
    if(rect.left<=0 || rect.left>=innerWidth){
        return true;
    }
    return false;
}

function update_game(){
    // updating the score of the winner.
    // case 1: If the player wins
    const rect = ball.rect();
    if(rect.right>=innerWidth){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    // case 2: If the computer wins
    if(rect.left<=0){
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    // we are reseting the ball and paddle position after the update of score.
    // Note: We cant do reset befor the update of the score.
    ball.helper();
    Computer_paddle.reset();
}

document.addEventListener("mousemove",(e)=>{
    player_paddle.position = (e.y / window.innerHeight)*100;
})

window.requestAnimationFrame(update);