/* const collection = {
    item: ["bottle", "earbuds", "eyeglasses"],
    money: 100000,
    accessories: ["mobile", "watch"]
};

// Looping through the object using `for...in`
for (let key in collection) {
    // console.log(`${key} : ${collection[key]}`);  // with using string literals ...
    console.log(key + ": " + collection[key]); //printing without string literals...
} */

const bottleData = {
    color: ["red" , "orange" , "Purple"],
    height : [4, 3, 6.7],
    price : [2000, 3000, 4000]
}
for(let data in bottleData){
    console.log(data , ": " , bottleData[data]);
}
