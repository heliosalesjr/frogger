

let xPos = [600, 600, 600, 600, 600, 600];
let yPos = [40, 96, 150, 210, 270, 318];
let speeds = [2, 3 , 2.5, 5, 3.3, 2.3];
let carHeight = 40;
let carWidth = 50;

function showCars () {
    for (let i = 0; i < cars.length; i++) {
        image(cars[i], xPos[i],yPos[i], carWidth, carHeight);
    }

}

function moveCar () {
    for (let i = 0; i < cars.length;i++) {
        xPos[i] -= speeds[i];
        if (xPos[i] < -50) {
            xPos[i] = 600;
        }
    }
    
}
