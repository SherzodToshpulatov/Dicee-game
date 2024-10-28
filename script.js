let player1 = Math.floor(Math.random() * 6) + 1;
let player2 = Math.floor(Math.random() * 6) + 1;

const myHeading = document.querySelector("h1");
if(player1 > player2){
    myHeading.textContent = "Player 1 Won!";
} else if(player2 > player1){
    myHeading.textContent = "Player 2 Won!";
} else {
    myHeading.textContent = "Draw";
}
const images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];
const randomImg1 = images[player1 - 1];
const randomImg2 = images[player2 - 1];

document.getElementById('img1').src = randomImg1;
document.getElementById('img2').src = randomImg2;


