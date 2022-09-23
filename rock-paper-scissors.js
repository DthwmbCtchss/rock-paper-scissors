function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

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


//
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
refused.textContent = 'Refuse: ';
admitted.textContent = 'Admit: ';

for (const person of people){
  if (person == "Phil" || person == "Lola"){
    refused.textContent += " "+person;
  }
    admitted.textContent += person;
}

let lastPart = refused.textContent.text.substr(0, refused.textContent.text[length-1]);

console.log(lastPart)

// loop starts here

//



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

function game(){
  for (let i = 0; i < 5; i++) {
    playRound()
  }
  for (let i = 0; i < finalTally.length; i++) {
    console.log("Round: "+(i+1)+": "+finalTally[i].message)
  }
}

game()