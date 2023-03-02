let imgDeFundo;
let player;
let car1, car2, car3;
let soundTrack;
let soundCollision;
let soundScore;

let cars;

function preload() {
    soundFormats('mp3', 'wav');
    imgDeFundo = loadImage("./assets/img/estrada.png");
    player = loadImage("./assets/img/ator-1.png");
    car1 = loadImage("./assets/img/carro-1.png");
    car2 = loadImage("./assets/img/carro-2.png");
    car3 = loadImage("./assets/img/carro-3.png");
    cars = [car1, car2, car3, car1, car2, car3];
    soundTrack = loadSound("./assets/audio/trilha.mp3");
    soundCollision = loadSound("./assets/audio/colidiu.mp3");
    soundScore = loadSound("./assets/audio/pontos.wav");

}
