/* 🔥 Question: Counting Even Numbers in an Array (Using While Loop)
You have an array of numbers, and you need to count how many even numbers are in the array using a while loop.
👉 Given Array:
let numbers = [2, 7, 4, 9, 10, 15, 18, 21];
🎯 Expected Output:
Total even numbers: 4 */



let numbers = [2, 7, 4, 9, 10, 15, 18, 21];
let isEven = 0; // For counting the even numbers
let i = 0;

while (i < numbers.length) {
    // console.log(numbers[i]);  // Print the even number
    if (numbers[i] % 2 === 0) {  // Check if the number is even
        isEven++;  // Increment the counter for even numbers
    }
    i++;
}

console.log("Total event numbers: " , isEven);  // Print the total number of even numbers










