// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct values.

let Randomnumber = 10;
let usernumber = prompt("Guess my number:-");

while(usernumber != Randomnumber){
  usernumber = prompt("please guess another number:-")
}

console.log("finally you guessed correct number");
console.log("Congratulation")
