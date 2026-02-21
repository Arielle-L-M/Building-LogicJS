// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for (let clapping = 1; clapping <= 20; clapping++) { /*let the starting variable ('i') start at '1', and the loop run, adding 1 every loop ('i++'), until the variable ('i') is less than or equal to '20' */
  if (clapping % 3 === 0 && clapping % 5 === 0) { /*setting the logic for variables accounted for to be divisible by 3 AND 5! (evident by the remainder operator equalling zero after being divided by 3 and ('&&') 5)*/
    console.log("FizzBuzz"); /*FizzBuzz (15:) being the logic for %3 && %5 (divisible by 3 and 5) */
  } else if (clapping % 3 === 0) {
    console.log("Fizz"); /*Fizz (3,6,9,etc.) being the logic for %3*/
  } else if (clapping % 5 === 0) {
    console.log("Buzz"); /*Buzz (5,10,15,etc.) being the logic for %5*/
  } else {
    console.log(clapping); /*Running the code to check for outcome:]*/
  }
}/*replaced 'i' with clapping to mimic your example from the lesson, and equated the coding to a round in choir music, where every 'i' equals a clap until a divisible # of 3 and 5 signals someone to say Fizz or Buzz:]*/
