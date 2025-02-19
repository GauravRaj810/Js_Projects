function hello(){ 
    console.log("Hello world !");
}
hello();  // function calling

// for adding two numbers - 
function addTwoNumber(){
    console.log(2+4);
}
addTwoNumber();
addTwoNumber();
addTwoNumber();
addTwoNumber();
addTwoNumber();

// now using function return way ...
function diff(){
    return 9-8;  // but this is not helpful for code reusiblity ...
}
console.log(diff()); 
// to make code reusable we use parameters in function