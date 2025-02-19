function myfunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myfunc(3,4,5,6,7,8) // 

/* anotehr example of restparameter using sum of all no  */
function sumOfAll(...numbers){   // here we usen rest parameter 
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = sumOfAll(7,8,641,313,31)
console.log(ans);