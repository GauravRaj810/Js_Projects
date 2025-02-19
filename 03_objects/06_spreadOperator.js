let obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}
let obj2 = {
    key3 : "Value3",
    key4 : "Value4"
}

// use of spread operator in object ..
// let spreadDemo = {...obj1};
// console.log(spreadDemo);

let spreadDemo2 = {...obj1 , ...obj2 , key67: "value78"}
console.log(spreadDemo2);
