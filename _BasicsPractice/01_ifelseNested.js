/* Question: Write a JavaScript program that takes an order amount and prints the delivery charge.
An e-commerce website calculates delivery charges based on the order amount:
If the order amount is $100 or more, delivery is free.
If the order amount is between $50 and $99, delivery costs $5.
If the order amount is less than $50, delivery costs $10. */

const orderAmount = 50; 
if (orderAmount >= 500) {
    console.log("The delivery is free");
} else {
    if (orderAmount >= 50 && orderAmount <= 99) {
        console.log("The delivery cost is $5");  
    } else {
        console.log("The delivery cost is $10");  
    }
}
