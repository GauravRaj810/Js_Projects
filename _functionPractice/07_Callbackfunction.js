/* 🚀 Next: Callback Function Question
👉 Write a function processData that takes a number and a callback function.
The callback function should double the number and return it.
Call processData(5, callbackFunction) and print the result.
💡 Expected Output:
Result: 10
Try it out! Let me know if you need help! 🔥😊 */

const processData =(number, callback)=>{
      console.log("hii i am processData function !");
      callback(number); 
}
const doubletheNumber=(num)=>{
    console.log("Result:" , num * 2);
}

processData(2 , doubletheNumber)