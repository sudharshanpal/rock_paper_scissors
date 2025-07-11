# ✊🖐✌️ Rock Paper Scissors

A simple web-based **Rock Paper Scissors** game where you play against the computer. Choose Rock, Paper, or Scissors, where the computer randomly selects one too. First to win the most rounds wins!

🎮 **Play it live here:** [rock-paper-scissors-suds-game.vercel.app](https://rock-paper-scissors-suds-game.vercel.app)

---

## 🎮 How to Play
- Click on **Rock**, **Paper**, or **Scissors**.
- The computer chooses its move at random.
- The game displays who won the round and updates the score.
- Scores are **saved in local storage**, so they persist even if you refresh.

---

## 🧠 Core Concepts Learned 

### 📌 Event Handling
- Each button (`Rock`, `Paper`, `Scissors`) uses an **event listener**.
- When clicked, JavaScript grabs the user's choice using the button's `data-choice` attribute.
- The computer’s move is generated with `Math.random()`.

### 💾 Local Storage
- The score is stored using `localStorage.setItem()`.
- On page load, saved scores are retrieved with `localStorage.getItem()` to restore the game state.

### 🔄 Resetting Score
To reset the scores:
- You can manually clear local storage using browser dev tools.
- Or, add a **Reset Score** button in your UI that runs:
  ```js
  localStorage.clear();
  location.reload();
