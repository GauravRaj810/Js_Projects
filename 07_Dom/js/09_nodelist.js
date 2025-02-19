const nodeElements = document.querySelectorAll("a");

// for printing all a tags  - 
// for(let i=0; i<nodeElements.length; i++){
//     console.log(nodeElements[i]);
//     const nodeElement = nodeElements[i]
//     nodeElement.style.color = "yellow"

// }

// using forEach Loop -     
nodeElements.forEach((nodeElement)=>{ // here forEach works bcz of nodeList 
    nodeElement.style.color = 'red'
})