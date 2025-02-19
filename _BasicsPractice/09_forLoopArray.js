/* 🔥 Question: Removing Duplicate Usernames (For Loop & Arrays)
A social media platform does not allow duplicate usernames when displaying trending users.
👉 Question:
Write a JavaScript program using a for loop to remove duplicate usernames from an array.
💡 Given Data (Usernames List)
let usernames = ["John", "Alice", "Bob", "Alice", "John", "Charlie", "Bob"];
🎯 Expected Output (Unique Usernames)
["John", "Alice", "Bob", "Charlie"]
Try solving this! Let me know if you need help! 🚀🔥 */
// let usernames = ["John", "Alice", "Bob", "Alice", "John", "Charlie", "Bob"];
// let validUser = [];

// for(let i=0; i<usernames.length; i++){
//     if(!validUser.includes(usernames[i])){  // check for the duplicate elements 
//         validUser.push(usernames[i]);  // and then conditon execute and the whole i index is got placed to the validuser array ... 
//     }
// }
// console.log(validUser);

// for(let price of bookPrice){
//     if(!updatedPrice.includes(bookPrice[price])){  // for of loop checks the actutal values ... so we dont need to use the index values  
//         updatedPrice.push(bookPrice[price]);
//     }
// }
let bookPrice = [111,453,4623,453];
let updatedPrice = [];

// console.log(updatedPrice);
for(let price of bookPrice){
    if(!updatedPrice.includes(price)){  
        updatedPrice.push(price);
    }
}
console.log(updatedPrice);


