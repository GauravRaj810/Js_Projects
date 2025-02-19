🔹 What is the Spread Operator (...) in JavaScript?
The spread operator (...) is used to expand elements of an array, object, or string into individual elements.

📌 It helps copy, merge, and manipulate arrays and objects easily.
✅ 1. Spread Operator with Arrays
🔸 Example: Copying an Array
Instead of using .slice() to copy an array, you can use ...:

let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // Copy arr1 into arr2

console.log(arr2);  // Output: [1, 2, 3]
🔹 Why use ...? It creates a new copy instead of modifying the original array.

🔸 Example: Merging Arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]
🔹 Easier than using .concat().

🔸 Example: Adding Elements Easily
let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5];

console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]
🔹 You can insert elements anywhere in the array.