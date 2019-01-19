// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let name = 'Edgar';
let age = 28;
if (true === true) {
  let lastName = 'Flores';
  console.log(name);
  console.log(lastName);
  name = 'Who';
}
console.log(name);


// ==== Challenge 2: Create a counter function ====
let value = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return value += 1;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter();
counter();
counter();
console.log(counter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
