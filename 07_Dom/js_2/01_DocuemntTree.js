// Document Tree Structure helps to enable traverse us ..
/* const rootNode = document.getRootNode();
console.log(rootNode); */

// to getting childNode - 
const rootNode = document.getRootNode();
const indexingnodes = (rootNode.childNodes[1]);
console.log(indexingnodes.childNodes); // it will give head , text , body ... 
