var wins = 0;
var losses = 0;
var ties = 0;
var rps = ["R", "P", "S"]

// Take user input and store in input variable
var input = prompt("Enter R, P or S: ")
console.log(input);

// Generate a computer output
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var randomRPS
// Decide who wins
// tie condition 
if (input === rps[getRandomInt(3)]) {
    ties = ties + 1;
    alert("Tie" , rps[getRandomInt(3)]);

} else {
    // if user input R and computer returns P (computer wins)

    if ((input === "R") && ( rps[getRandomInt(3)] === "P")) {
        losses =  + 1;
        alert("Loss" , rps[getRandomInt(3)]);
    }
    // if user input R and computer returns s (user wins)
    if ((input === "R") && ( rps[getRandomInt(3)] === "S")) {
        wins =  + 1;
        alert("Win" , rps[getRandomInt(3)]);
    }
    
    // if user input P and computer returns R (user wins)
    if ((input === "P") && ( rps[getRandomInt(3)] === "R")) {
        wins =  + 1;
        alert("Win" , rps[getRandomInt(3)]);
    }

     // if user input P and computer returns S (computer wins)
     if ((input === "P") && ( rps[getRandomInt(3)] === "S")) {
        losses =  + 1;
        alert("Loss" , rps[getRandomInt(3)]);
    }

      // if user input S and computer returns R (computer wins)
      if ((input === "S") && ( rps[getRandomInt(3)] === "R")) {
        losses =  + 1;
        alert("Loss" , rps[getRandomInt(3)]);
    }

       // if user input S and computer returns P (user wins)
       if ((input === "S") && ( rps[getRandomInt(3)] === "P")) {
        wins =  + 1;
        alert("Win" , rps[getRandomInt(3)]);
    }

} 

// console.log(getRandomInt(3));
//   // Expected output: 0, 1 or 2


// alert("Win, loss, tie");

alert("The variable named has value:  " + wins + losses + ties);