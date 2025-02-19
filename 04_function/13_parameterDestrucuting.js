// parameter Destructuring - 
const person={
    firstName : "Gaurav",
    Gender: "male"
}
function myDetails({firstName , Gender, age}){  // example of parameter destructuring 
    console.log(firstName);
    console.log(Gender);
    console.log(age);  // execute as undefined bcz age is not defined in the object 
}
myDetails(person);  // output - print the name as gaurav and gender as male 