// funtion takes one argument and check that numebr is even or not as 0 or 1
function isEven(number){
    if(number%2==0){
        console.log("number is even"); // we can also use return true or false 
    } else{
        console.log("number is odd");
    }
}
isEven(2); // then we use true or false then we have to use the clo here ...

/* same above isOdd function in shorter  */
function isOdd(num){
    return num % 2 !== 0;  // very short check for odd if is then true otherwise false ..
}
console.log(isOdd(1));