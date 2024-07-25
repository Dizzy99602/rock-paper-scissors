let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  const rock = document.querySelector("[id='1']");
  const paper = document.querySelector("[id='2']");
  const scissors = document.querySelector("[id='3']");

  const result = document.querySelector("#result");

  const playAgain = document.createElement("button");
  playAgain.textContent = "Play again";

  function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      result.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      result.textContent = "You lose! paper beats rock";
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      result.textContent = "You win! rock beats scissors";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      result.textContent = "You win! paper beats rock";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      result.textContent = "You lose! scissors beats paper";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      result.textContent = "You win! scissors beats paper";
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      result.textContent = "You lose! rock beats scissors";
      computerScore++;
    }
    container.appendChild(result);
    container.appendChild(playAgain);
  }

  function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }

  function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
  }

  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    disableButtons();
  });

  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    disableButtons();
  });

  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    disableButtons();
  });

  playAgain.addEventListener("click", () => {
    result.textContent = '';
    playAgain.remove();
    enableButtons();
  });

  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);
});
