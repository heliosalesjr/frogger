let imgDeFundo;
let player;
let car1;

let xCar = 600;
let yCar;

let xPlayer;
let yPlayer = 350;


function preload() {
    imgDeFundo = loadImage("./assets/img/estrada.png");
    player = loadImage("./assets/img/ator-1.png");
    car1 = loadImage("./assets/img/carro-1.png");
}

function setup () {
    createCanvas(500,400);
}

function draw () {
    background(imgDeFundo);
    showPlayer();
    showCar();
    moveCar();
    movePlayer();

}

function showPlayer () {

    image(player, 100, yPlayer, 50,50);
}

function showCar () {

    image(car1, xCar,40,50,40);

}

function moveCar () {

    xCar -=2;
    
}

function movePlayer () {

    if (keyIsDown(UP_ARROW)) {
        yPlayer -=3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPlayer +=3;
    }
}