// for extract values from an object and assign them to variables in a clean concise way ! 
const toy={
    color: "red",
    item: 2,
    Quantity : 100
}
/* let{color , item} = toy;
console.log(color);  // becomes as normal varaible with the help of destructuringh 
console.log(item);  // 2  */
for(let key in toy){
    console.log(key +": " + toy[key]); 
}