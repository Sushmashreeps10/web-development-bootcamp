let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices > div"); // ✅ Correctly selects all choice divs
const msg = document.querySelector("#msg"); // ✅ Fixing msg selection
const userScoreEl = document.querySelector("#yourScore");
const compScoreEl = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // ✅ Fix variable name
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw! Play again.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreEl.innerText = userScore; // ✅ Update user score
    } else {
        console.log("You lose!");
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreEl.innerText = compScore; // ✅ Update computer score
    }
};

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

// Add event listener to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id; 
        playGame(userChoice);
    });
});
