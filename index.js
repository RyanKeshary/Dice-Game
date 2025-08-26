// Number Generator between 1-6
var randomUnitDigitNumber1 = Math.floor( Math.random()*6 ) + 1;
var randomUnitDigitNumber2 = Math.floor( Math.random()*6 ) + 1;
console.log(randomUnitDigitNumber1, randomUnitDigitNumber2);

// var fileName = "dice" + randomUnitDigitNumber1 + ".png";

// Assigning dice image to a number 
// dice 1
if (randomUnitDigitNumber1 === 1) {
    document.querySelector(".img1").src = "./images/dice1.png"
}
else if (randomUnitDigitNumber1 === 2) {
    document.querySelector(".img1").src = "./images/dice2.png"
}
else if (randomUnitDigitNumber1 === 3) {
    document.querySelector(".img1").src = "./images/dice3.png"
}
else if (randomUnitDigitNumber1 === 4) {
    document.querySelector(".img1").src = "./images/dice4.png"
}
else if (randomUnitDigitNumber1 === 5) {
    document.querySelector(".img1").src = "./images/dice5.png"
}
else {
    document.querySelector(".img1").src = "./images/dice6.png"
}

// dice 2
if (randomUnitDigitNumber2 === 1) {
    document.querySelector(".img2").src = "./images/dice1.png"
}
else if (randomUnitDigitNumber2 === 2) {
    document.querySelector(".img2").src = "./images/dice2.png"
}
else if (randomUnitDigitNumber2 === 3) {
    document.querySelector(".img2").src = "./images/dice3.png"
}
else if (randomUnitDigitNumber2 === 4) {
    document.querySelector(".img2").src = "./images/dice4.png"
}
else if (randomUnitDigitNumber2 === 5) {
    document.querySelector(".img2").src = "./images/dice5.png"
}
else {
    document.querySelector(".img2").src = "./images/dice6.png"
}

// declaring in title 
if (randomUnitDigitNumber1 > randomUnitDigitNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins 🥳"
}
else if (randomUnitDigitNumber1 < randomUnitDigitNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins 🤑"
}
else {
    document.querySelector("h1").textContent = "Draw 🤝"
}