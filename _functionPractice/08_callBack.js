/* 
🔥 Question: Callback Function with User Data Processing
Write a function fetchUserData that:
Takes a callback function as a parameter.
Calls the callback function with a user object { name: "Alice", age: 25 }.
The callback function should print the user's details.
📌 Expected Output (After 2 seconds):
Fetching user data...
User Name: Alice
User Age: 25 */

const fetchUserData =(callback)=>{
    const user = { name: "Alice", age: 25 }
    callback(user);

}
const displayuser =(userData)=>{
    console.log(`user Name: ${userData.name}`);
    console.log(`user age: ${userData.age}`);
   
}
fetchUserData(displayuser);