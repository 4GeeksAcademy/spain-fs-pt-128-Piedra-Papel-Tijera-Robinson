// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function () {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

const computerChoise = choises[Math.floor(Math.random() * choises.length)]
console.log(computerChoise);

const play = (userChoise) => {
  if (userChoise === computerChoise) {
    console.log("Empate");
   
  } else if (rules[userChoise].includes(computerChoise)) {
    console.log("¡El jugador derrota a su oponente!");
  
  } else {
    console.log("¡El poder del ordenador gana la batalla!");
   
  }
}
play("lizard")