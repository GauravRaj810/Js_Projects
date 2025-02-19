const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myValue1"
const value2 = "myValue2"

const obj = {
    [key1]:value1,    // this is well know as computed propeties where we can use bracket notation 
    [key2]:value2   // while adding brackets we can successfully print the objkey1 means the internal value of the key1 and key2with the help of computed properites
}
console.log(obj);