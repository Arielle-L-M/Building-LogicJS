// Kata 1: Print the first 10 even numbers
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold loop structure"
// Commit 2: "added even number condition"
// Commit 3: "refactored variable names for clarity"


for (shoes = 1; shoes <= 20; i++) { /* 'let i=1' sets the starting variable as 1, 'i <=' sets the loop to run so long as the variable remains less than or equal to 20 while the loop runs, and 'i++' means add 1 to the initail variable every loop that continues until they hit that '<=20' condition*/
  if (shoe % 2 === 0) { /*this line is what sets the condition that we get only even numbers, 'i' being the initial variable from the previous line, and '%' acting as a "remainder operator" (I looked that up), that means that any variable divided by 2 in this instance coming back should be perfectly divisible (a zero remaining as the leftover '=== 0'), and that any number that is NOT perfectly divisible (a one remaining as the leftover '=== 1') should be excluded from the final solution*/
    console.log(shoe); /* you didn't ask for it, but I looked this part up, and apparently it's a command ("built in funtion") that informs the code to run ("print messages/variables/expressions") for debugging purposes. Like double checking your answers to make sure that what code you put in gives you the answers that you know you're looking for:] In this instance, running for the variable 'i', and getting the answers from running the node and getting 2,4,6,etc!*/
  } /*refactored variable names for clarity, assigning 'i' to mean shoes since the overall loop is accounting for things that come in twos/pairs*/
}
