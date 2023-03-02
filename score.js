let playerScore = 0;
let compScore = 0;

function score () {
    textAlign(CENTER);
    textSize(30);
    text(playerScore, width/5, 28);
    text(compScore, width/1.5, 28);
    fill(color(255,240,60));

    if (yPlayer < 10) {
        playerScore ++;
        yPlayer = 366;
        soundScore.play();
    }

    
}