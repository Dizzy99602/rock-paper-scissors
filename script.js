let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("rock, paper or scissor's");
    choice = choice.toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissors") {
      return choice;
    } else {
      console.log("Try again")
    }
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
    humanScore++;
    computerScore++;
  }
  else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win " + humanChoice + " beats " + computerChoice);
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win " + humanChoice + " beats " + computerChoice);
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win " + humanChoice + " beats " + computerChoice);
    humanScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}



function playGame() {

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("You won the game! -_-");
  } else if (humanScore < computerScore) {
    console.log("You lose the game! AHAHAHAH");
  } else {
    console.log("The game is tied! Booooooo");
  }
}

playGame();