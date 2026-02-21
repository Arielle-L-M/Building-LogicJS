// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for (let i = 1; i <= 20; i++) { /*let the starting variable ('i') start at '1', and the loop run, adding 1 every loop ('i++'), until the variable ('i') is less than or equal to '20' */
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
