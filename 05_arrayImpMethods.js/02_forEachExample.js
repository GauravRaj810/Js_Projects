const numbers = [2,4,,6,8];
function myFunc(number, index){
    console.log(`index is: ${index} number is ${number}`);
}
numbers.forEach(myFunc)