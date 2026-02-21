// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for (let i = 1; i <= 20; i++) { /*let the starting variable ('i') start at '1', and the loop run, adding 1 every loop ('i++'), until the variable ('i') is less than or equal to '20' */
  if (i % 3 === 0 && i % 5 === 0) { /*setting the logic for variables accounted for to be divisible by 3 AND 5! (evident by the remainder operator equalling zero after being divided by 3 and ('&&') 5)*/
    console.log("FizzBuzz"); /*FizzBuzz (15:) being the logic for %3 && %5 (divisible by 3 and 5) */
  } else if (i % 3 === 0) {
    console.log("Fizz"); /*Fizz (3,6,9,etc.) being the logic for %3*/
  } else if (i % 5 === 0) {
    console.log("Buzz"); /*Buzz (5,10,15,etc.) being the logic for %5*/
  } else {
    console.log(i); /*Running the code to check for outcome:]*/
  }
}
