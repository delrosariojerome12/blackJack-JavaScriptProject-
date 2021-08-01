// cards
let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let numberCards = 2;
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
//computer ai wahahaha
let firstCardComp = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCardComp = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
// total
let computerSum = firstCardComp + secondCardComp;
let compNumCards = 2;
// html elements
let cards = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let message = document.getElementById("message");
let saveCard = document.getElementById("saveCard");
let results = document.getElementById("results");
let winLose = document.getElementById("winLose");
winLose.style.textAlign = "center";
//
let hasBlackjack = false;
let isAlive = true;
//
let startButton = document.getElementById("startButton");
let drawButton = document.getElementById("drawButton");

function start() {
  let anotherCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

  if (sum <= 20) {
    // player card less than 21
    message.textContent = "Do you want to draw a new card?";
    message.style.textAlign = "center";
    // player
    console.log(sum + " player sum");
    console.log(numberCards + " player cards");
    // computer
    console.log(computerSum + " computer sum");
    console.log(compNumCards + " computer cards");
    if (computerSum <= 11) {
      computerSum += anotherCard;
      compNumCards++;
    }
    // computer wins
    if (computerSum === 21) {
      results.style.display = "flex";
      winLose.textContent = `You Lose! Player Sum: ${sum} Cards: ${numberCards} Computer Wins! \nSum:${computerSum} Cards: ${compNumCards} `;
      computerScore.textContent++;
    }
    // draw equal to 21
  } else if (sum === 21 && computerSum === 21) {
    results.style.display = "flex";
    winLose.textContent = `Draw! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
    // draw in out of bounds
  } else if (sum > 21 && computerSum > 21) {
    results.style.display = "flex";
    winLose.textContent = `Draw! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
    // player wins
  } else if (sum === 21) {
    hasBlackjack = true;
    results.style.display = "flex";
    winLose.textContent = `Black Jack! You Win! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
    playerScore.textContent++;
  } else {
    isAlive = false;
    results.style.display = "flex";
    winLose.textContent = `You Lose! Player Sum: ${sum} Cards: ${numberCards} Computer Wins! \nSum:${computerSum} Cards: ${compNumCards} `;
    computerScore.textContent++;
  }

  // display in ui
  sumEl.textContent = sum;
  cards.textContent = 2;

  message.style.opacity = "1";
  message.style.transition = "all 1s ease-in ";
  drawButton.style.display = "block";
  saveCard.style.display = "block";

  // disable start button
  startButton.disabled = true;
  drawButton.disabled = false;
  saveCard.disabled = false;
  numberCards = 2;
}

function draw() {
  //   restriction and functionality
  let anotherCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  numberCards++;
  cards.textContent = numberCards;
  console.log("numberCArds " + numberCards);
  sum += anotherCard;
  sumEl.textContent = sum;

  // checking
  if (sum <= 20) {
    message.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackjack = true;
    results.style.display = "flex";
    winLose.textContent =
      winLose.textContent = `You Win! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
    playerScore.textContent++;
  } else {
    isAlive = false;
    results.style.display = "flex";
    winLose.textContent = `You Lose! Sum Over 21! Player Sum: ${sum} Cards: ${numberCards} Computer Wins! \nSum:${computerSum} Cards: ${compNumCards} `;
    computerScore.textContent++;
  }
}
function save() {
  drawButton.disabled = true;
  results.style.display = "flex";
  if (sum < computerSum && computerSum <= 21) {
    results.style.display = "flex";
    winLose.textContent = `You Lose! Player Sum: ${sum} Cards: ${numberCards} Computer Wins! \nSum:${computerSum} Cards: ${compNumCards} `;
    computerScore.textContent++;
  } else if (sum > computerSum && sum <= 21) {
    results.style.display = "flex";
    winLose.textContent = `You Win! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
    playerScore.textContent++;
  } else {
    results.style.display = "flex";
    winLose.textContent = `Draw! Player Sum: ${sum} Cards: ${numberCards} Computer Sum:${computerSum} Cards: ${compNumCards} `;
  }
}
function playAgain() {
  results.style.display = "none";
  drawButton.disabled = true;
  cards.textContent = 0;
  sumEl.textContent = 0;
  startButton.disabled = false;
  saveCard.disabled = true;
  firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  sum = firstCard + secondCard;
  firstCardComp = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  secondCardComp = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  computerSum = firstCardComp + secondCardComp;
  // tests
  console.log("play again btn");
  console.log(firstCard);
  console.log(secondCard);
  console.log(sum);
  console.log(numberCards);
  console.log("comp");
  console.log(firstCardComp);
  console.log(secondCardComp);
  console.log(computerSum);
  console.log(compNumCards);
}
