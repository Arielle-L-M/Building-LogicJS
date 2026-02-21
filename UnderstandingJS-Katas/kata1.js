// Kata 1: Print the first 10 even numbers
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold loop structure"
// Commit 2: "added even number condition"
// Commit 3: "refactored variable names for clarity"


for (let i = 1; i <= 20; i++) { /* 'let i=1' sets the starting variable as 1, 'i <=' sets the loop to run so long as the variable remains less than or equal to 20 while the loop runs, and 'i++' means add 1 to the initail variable every loop that continues until they hit that '<=20' condition*/
  if (i % 2 === 0) {
    console.log(i);
  }
}
