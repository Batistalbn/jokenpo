// Global variables
let playerName;

let playerChoice = 0;
let computerChoice = 0;

let playerPoints = 0;
let computerPoints = 0;

// Ask for the player's name
playerName = prompt("Qual é o seu nome?");

// Show player name
function setPlayerName(name) {
  document.getElementById("player-name").innerHTML = name;
}
setPlayerName(playerName);

// Welcome message
function message(text) {
  document.getElementById("message").innerHTML = text;
}
message(
  "Bem-vindo " + playerName + ", está preparado? Esolha uma opção a cima..."
);

// Draw computer choice
function drawComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate match winner
function calculateWinner(player, computer) {
  if (player == 1 && computer == 1) {
    return 0;
  } else if (player == 1 && computer == 2) {
    return 2;
  } else if (player == 1 && computer == 3) {
    return 1;
  } else if (player == 2 && computer == 1) {
    return 1;
  } else if (player == 2 && computer == 2) {
    return 0;
  } else if (player == 2 && computer == 3) {
    return 2;
  } else if (player == 3 && computer == 1) {
    return 2;
  } else if (player == 3 && computer == 2) {
    return 1;
  } else if (player == 3 && computer == 3) {
    return 0;
  }
}

// Calculate points
function addPoints(variable, id) {
  variable++;
  document.getElementById(id).innerHTML = variable;
}

// Select moves
function selectMoves(type, choice) {
  document.getElementById(type + "-choice-" + choice).classList.add("selected");
}

// Deselect moves
function deselectMoves(type, choice) {
  document
    .getElementById(type + "-choice-" + choice)
    .classList.remove("selected");
}

// Play jokenpô
function play(choice) {
  playerChoice = choice;
  selectMoves("player", playerChoice);

  computerChoice = drawComputerChoice(1, 3);
  selectMoves("computer", computerChoice);

  let winner = calculateWinner(playerChoice, computerChoice);

  if (winner == 0) {
    message("Empate");
  } else if (winner == 1) {
    message("Ponto para " + playerName);
    addPoints(playerPoints, "player-points");
  } else if (winner == 2) {
    message("Ponto para o computador");
    addPoints(computerPoints, "computer-points");
  }

  setTimeout(function () {
    deselectMoves("player", playerChoice);
    deselectMoves("computer", computerChoice);
    message(playerName + " escolha uma opção acima...");
  }, 1500);
}

// Events
document.getElementById("player-choice-1").onclick = function () {
  play(1);
};

document.getElementById("player-choice-2").onclick = function () {
  play(2);
};

document.getElementById("player-choice-3").onclick = function () {
  play(3);
};
