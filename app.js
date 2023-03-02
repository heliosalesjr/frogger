

function setup () {
    createCanvas(500,400);
    soundTrack.loop();
}

function draw () {
    background(imgDeFundo);
    showPlayer();
    showCars();
    moveCar();
    movePlayer();
    checkCollision();
    score();
}
