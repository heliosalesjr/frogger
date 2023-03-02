let xPlayer = 85;
let yPlayer = 372;
let collision = false;

function showPlayer () {

    image(player, xPlayer, yPlayer, 30,30);
}


function movePlayer () {

    if (keyIsDown(UP_ARROW)) {
        yPlayer -=3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if(limits()) {
            yPlayer +=3;
        }

    }
}

function checkCollision () {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < cars.length; i++) {
        collision = collideRectCircle(xPos[i], yPos[i], carWidth, carHeight, xPlayer, yPlayer, 25);
            if (collision) {
                crashed();
            }


    }

}


function crashed () {
    yPlayer = 366;
    compScore++;
    soundCollision.play();
}

function limits () {
    return yPlayer < 366;
}