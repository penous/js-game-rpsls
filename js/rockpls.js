const choices = {
  rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
  lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
};

const playerField = document.getElementById('player-choice');
const comField = document.getElementById('com-choice');
const resultField = document.getElementById('result');
let pChoice = '';
let cChoice = '';

const makeChoice = (id) => {
  switch (id) {
    case 'rock':
      pChoice = choices.rock;
      break;
    case 'scissors':
      pChoice = choices.scissors;
      break;
    case 'paper':
      pChoice = choices.paper;
      break;
    case 'spock':
      pChoice = choices.spock;
      break;
    case 'lizard':
      pChoice = choices.lizard;
      break;

    default:
      break;
  }
  playerField.innerHTML = pChoice.name;
};

document.querySelectorAll('button.choices').forEach((btn) => {
  btn.addEventListener('click', () => {
    makeChoice(btn.id);
  });
});

document.getElementById('play').addEventListener('click', () => {
  const temp = Object.keys(choices)[Math.floor(Math.random() * 5)];
  cChoice = choices[temp];
  comField.innerHTML = cChoice.name;

  let result = pChoice.defeats.includes(cChoice.name)
    ? 'The Player wins!!'
    : 'The Computer wins!!';
  if (pChoice.name === cChoice.name) result = "It's a tie!!";

  resultField.innerHTML = result;
});

document.getElementById('reset').addEventListener('click', () => {
  cChoice = '';
  pChoice = '';
  playerField.innerHTML = '';
  comField.innerHTML = '';
  resultField.innerHTML = '';
});
