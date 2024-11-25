

document.getElementById('submitButton').addEventListener('click', (event) => {
    event.preventDefault(); 
  
    const inputName = document.querySelector('#nameInput').value;
  
    const nameEl = document.querySelector('h2');
    nameEl.innerText = `Now let's roll some, ${inputName}!`;
  });

const rollButton = document.querySelector('#rollButton');
let clickCounter = 0;
let totalScore = 0;
let turnScore = 0;
let roundCounter = 0; 

rollButton.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1;

  const diceScore = document.querySelector('#diceScore');
  diceScore.innerText = `Dice shows: ${diceNumber}`;

  clickCounter++;
  document.querySelector('#rollCount').innerText = `In ${clickCounter} rolls`;

 if (diceNumber === 1) {
    totalScore += turnScore;
    turnScore = 0;
    clickCounter = 0;
    roundCounter++;
    document.querySelector('#turnScore').innerText = `Your score this turn goes to waste!!`;
    document.querySelector('#roundsPlayed').innerText = `You played ${roundCounter} rounds`;
  } else {
    turnScore += diceNumber;

    document.querySelector('#turnScore').innerText = `Your score this turn: ${turnScore}`;
    document.querySelector('#totalScore').innerText = `Total Score: ${totalScore + turnScore}`;
    document.querySelector('#roundsPlayed').innerText = `You played ${roundCounter} rounds`;
  }
  if (totalScore + turnScore > 100) {
    const youWonElement = document.querySelector('#youWon');
    document.querySelector('#youWon').innerText = `You won in ${roundCounter} turns!`
    youWonElement.classList.remove('youwon');
  }
});


const freezeButton = document.querySelector('#freezeButton');

freezeButton.addEventListener('click', () => {
  totalScore += turnScore;
  roundCounter ++;

  turnScore = 0;
  clickCounter = 0;
  document.querySelector('#roundsPlayed').innerText = `You played ${roundCounter} rounds`;
  document.querySelector('#totalScore').innerText = `Total Score: ${totalScore}`;
  document.querySelector('#turnScore').innerText = `Your score this turn: ${turnScore}`;
});


resetButton.addEventListener('click', () => {
    totalScore = 0;
    turnScore = 0;
    clickCounter = 0;
    roundCounter = 0;
  
    document.querySelector('#totalScore').innerText = `Total Score: ${totalScore}`;
    document.querySelector('#turnScore').innerText = `Your score this turn: ${turnScore}`;
    document.querySelector('#rollCount').innerText = `In ${clickCounter} rolls`;
    document.querySelector('#roundsPlayed').innerText = `You played ${roundCounter} rounds`;
    document.querySelector('#diceScore').innerText = `Dice shows: 0`;
    document.querySelector('#youWon').innerText = `You won in ${roundCounter} turns!`
    const youWonElement = document.querySelector('#youWon');
    youWonElement.classList.add('youwon');
  });


