// object intilization - 
const collection={
    item:["bottle" , "earbuds" , "eyeglasses"],
    money: 100000,
    accessories: ["mobile" , "watch"]
}
// console.log(collection); // prinintg whole object
for(let key in collection) {
    console.log(  key   , ":" ,  collection[key]);
}