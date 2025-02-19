const person = {
    height : "6 feet",
    weight: "75 kg",
    Name : "Rahul"
}

const dExample =({height})=>{  // parameter destructuring ...
  console.log(height);
}
dExample(person)