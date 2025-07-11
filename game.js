document.getElementById("player-score").textContent = localStorage.getItem("playerScore") || "0";
  document.getElementById("computer-score").textContent = localStorage.getItem("computerScore") || "0";
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const playerChoice = button.getAttribute("data-choice");

      const computerChoice = Math.floor(Math.random() * 3);
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoiceText = choices[computerChoice];
      let playerScore = parseInt(document.getElementById("player-score").textContent);
      let computerScore = parseInt(document.getElementById("computer-score").textContent);

      document.getElementById("player-choice").textContent = playerChoice;
      document.getElementById("computer-choice").textContent = computerChoiceText;

      if (playerChoice === computerChoiceText) {
        document.getElementById("result").textContent = "It's a draw!";
      } else if (
        (playerChoice === "rock" && computerChoiceText === "scissors") ||
        (playerChoice === "paper" && computerChoiceText === "rock") ||
        (playerChoice === "scissors" && computerChoiceText === "paper")
      ) {
        document.getElementById("result").textContent = "You win!";
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
      } else {
        document.getElementById("result").textContent = "You lose!";
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
      }
    });
  });

    const resetButton = document.getElementById("reset-scores");
    resetButton.addEventListener("click", () => {
    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
    document.getElementById("result").textContent = "Scores reset!";
    localStorage.setItem("playerScore", "0");
    localStorage.setItem("computerScore", "0");
  }); 
