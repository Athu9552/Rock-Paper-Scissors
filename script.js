let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const massage = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  // Rock Paper Scissors.
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  massage.innerText = "Game Draw";
  massage.style.backgroundColor = "#1E2749";
};

const showWinner = (userWin,UserChoice,computerChoice) => {
  if (userWin) {
    userScore ++;
    userScorePara.innerText = userScore;
    massage.innerText = `You Win Your ${UserChoice} Beats ${computerChoice}`;
    massage.style.backgroundColor = "#73EEDC";
  } else {
    computerScore ++;
    computerScorePara.innerText = computerScore;
    massage.innerText = `You Lose ${computerChoice} Beats Your ${UserChoice}`;
    massage.style.backgroundColor = "#D7263D";
  }
};

const playGame = (UserChoice) => {
  console.log("User Choice : ", UserChoice);
  // Genrate Computer Choice.
  const computerChoice = genComputerChoice();
  console.log("Computer Choice : ", computerChoice);

  if (UserChoice === computerChoice) {
    drawGame();
  } else {
    let UserWin = true;
    if (UserChoice === "Rock") {
      // Scissors, Paper.
      userWin = computerChoice === "Paper" ? false : true;
    } else if (UserChoice === "Paper") {
      // rock, Scissors.
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      // paper, rock.
      userWin = computerChoice === "Rock" ? false : true;
    }
    showWinner(userWin,UserChoice,computerChoice);
  }
};
choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    playGame(UserChoice);
  });
});