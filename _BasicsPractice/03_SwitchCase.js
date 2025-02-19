/* 🛒 Cashback Reward System – switch-case Question 💰🔥
A shopping app gives cashback based on the exact amount spent:
Spend 50 → Get 5 cashback
Spend 100 → Get 10 cashback
Spend 150 → Get 15 cashback
Spend any other amount → No cashback
👉 Write a JavaScript program using switch-case to check the cashback amount based on amountSpent. 🚀 */
 
let amoutSpent = 50;
switch (amoutSpent) {
    case 50 :
        console.log("you will get 5 cashback");
        break;
    case 100 :
        console.log("you will get 10 cashback");
        break;
    case 150 :
        console.log("you will get 15 cashback");
        break;
    default: 
         console.log("Sorry there is no cashback");
}
