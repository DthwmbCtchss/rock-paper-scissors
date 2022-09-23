const possibleChoicesInt = new Map([
  [0, "rock"],
  [1, "paper"],
  [2, "scissors"],
]) 

const possibleChoicesString = new Map([
  ["rock", 0],
  ["paper", 1],
  ["scissors", 2],
]) 

const finalTally = []

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class RoundReport {
  constructor(playerChoiceInt, computerChoiceInt, result){
    this.playerChoice = possibleChoicesInt.get(playerChoiceInt)
    this.computerChoice = possibleChoicesInt.get(computerChoiceInt)
    this.result = result
    this.message = this.result+". "+"Player's choice was: "+this.playerChoice+". Computer's choice was: "+this.computerChoice+"."
  }
}

function parseChoice(input){
  return possibleChoicesString.get(input.toLowerCase())
}

function determineWinnerAndSpitOutReport(playerChoiceInt, computerChoiceInt){
  let report

  if (playerChoiceInt === computerChoiceInt){
    report = new RoundReport(playerChoiceInt, computerChoiceInt, "Tie")
    finalTally.push(report)
    return report    
  }

  if (playerChoiceInt === 0){
    if (computerChoiceInt === 1){
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Computer won")
    } else {
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Player won")
    }

  } else if (playerChoiceInt === 1){
    if (computerChoiceInt === 0){
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Player won")

    } else {
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Computer won")
    }
  }
  else {
    if (computerChoiceInt === 0){
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Computer won")
    } else {
      report = new RoundReport(playerChoiceInt, computerChoiceInt, "Player won")
    }
  }

  finalTally.push(report)
  return report
}



function playRound(wrongInput){
  let prompt

  if (wrongInput){
    prompt = "No, I said choose between the three: rock, paper or scissors."
  } else {
    prompt = "Choose between the three: rock, paper or scissors."
  }
  let choice = parseChoice(window.prompt(prompt))
  if (choice === undefined){
    playRound(true)
  } else {
    console.log(determineWinnerAndSpitOutReport(choice, randomInt(0, 2)).message)
  }
}

function game(rounds){
  for (let i = 0; i < rounds; i++) {
    playRound()
  }
  for (let i = 0; i < finalTally.length; i++) {
    console.log("Round: "+(i+1)+": "+finalTally[i].message)
  }
}

const message = document.getElementById("message")

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const roundReport = determineWinnerAndSpitOutReport(parseInt(e.target.id), randomInt(0,2))
    console.log(roundReport.message)
    if (finalTally.length === 5){
      buttons.forEach( (button)=>{
        button.remove()
      })
      let playerVictories = 0
      let computerVictories = 0
      for (const round of finalTally){
        if (round.result == "Player won") {
          playerVictories++
        } else if (round.result == "Computer won"){
          computerVictories++
        }

      }
      if (playerVictories < computerVictories){
        message.textContent = "You lost"
      } else if (playerVictories > computerVictories){
        message.textContent = "You won"
      } else {
        message.textContent = "Tie"
      }
    } else {
      message.textContent = roundReport.message
    }
  });
});

