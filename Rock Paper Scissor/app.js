document.addEventListener('DOMContentLoaded', () => {
  const playerScoreElement = document.getElementById('player-score');
  const computerScoreElement = document.getElementById('computer-score');
  const resultElement = document.getElementById('result');

  let playerScore = 0;
  let computerScore = 0;

  const choices = ['rock', 'paper', 'scissors'];

  const getComputerChoice = () => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
  };

  const determineWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
          return 'It\'s a tie!';
      }

      if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
          playerScore++;
          return 'You win!';
      } else {
          computerScore++;
          return 'Computer wins!';
      }
  };

  const updateScore = () => {
      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
  };

  document.getElementById('rock').addEventListener('click', () => {
      const playerChoice = 'rock';
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
      updateScore();
  });

  document.getElementById('paper').addEventListener('click', () => {
      const playerChoice = 'paper';
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
      updateScore();
  });

  document.getElementById('scissors').addEventListener('click', () => {
      const playerChoice = 'scissors';
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
      updateScore();
  });
});
