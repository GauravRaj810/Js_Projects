const bottle = {
    Name: "Varmora",
    color: "Gray",
    Quantity: 1, 
    "Brand Value": "high"
};

/* for(let key in bottle){
    console.log(key);  // it will return the key name only..
} */

// for key value pair ....
for(let key in bottle){
    // console.log(`${key}: ${bottle[key]}`); /* using string interpoleration */
    console.log(key,bottle[key]); // without using string literal 
    // what if we need colon in between then we use string concat type things 
    console.log(key, " :" , bottle[key]);
}
