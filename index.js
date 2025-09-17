// Step 1
let numbers = [];

// Step 2
let count = prompt("How many numbers do you want to add?");

// Step 3
for (let i = 0; i < count; i++) {
  let num = prompt(`Enter number ${i + 1}:`);
  numbers.push(Number(num)); 
}

// Step 4
console.log("Your numbers are:", numbers);
