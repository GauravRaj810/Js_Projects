/* 🔥 Question: Double Each Number in an Array Using for...of Loop
You have an array of numbers, and you need to double each number using a for...of loop and store the result in a new array.
👉 Given Array:
let numbers = [1, 2, 3, 4, 5];
🎯 Expected Output (New Array):
[2, 4, 6, 8, 10]
Try solving this! Let me know if you need help! 🚀🔥 */

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = []
for(let number of numbers){
    doubledNumbers.push(number *2)
}
console.log(doubledNumbers);  // mulitplied the numbers .. 

let orijnalArray = [1, 2, 3, 4, 5]
let reverseArray = []

for(let number of orijnalArray){
    reverseArray.unshift(number)  // unshift from the orjinal array and shit to the revesr one ... 
}
console.log(reverseArray);
 