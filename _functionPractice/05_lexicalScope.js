// lexical scope - function can access variables from its outer scope where where it was defined..
const lexicalTry =()=>{
    let var1 = 27;  // lexical scope 
    const lexicalChild =()=>{
        // let var1 = 29;
        console.log(var1);
    }
    lexicalChild(); 
}
 lexicalTry();
