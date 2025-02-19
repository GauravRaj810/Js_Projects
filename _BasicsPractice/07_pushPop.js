/* <!-- 🔥 Advanced Question: Browser History Navigation (Push & Pop)
A browser keeps track of visited pages using a history stack.
When a user visits a new page, it is added to the history (push()).
When the user clicks the "Back" button, the last visited page is removed (pop()).
👉 Question:
Write a JavaScript program that:
Starts with an empty browser history ([]).
The user visits "Google", "YouTube", and "GitHub" (use push() to add them).
The user clicks "Back" twice (use pop() to remove the last two pages).
Print the final browser history. --> */

// let browserHistory = [];
// browserHistory.push("google")
// browserHistory.push("youtube")
// browserHistory.push("github")
// console.log("After visiting pages" , browserHistory);
// browserHistory.pop("google")
// browserHistory.pop("youtube")
// console.log("After going back twice" , browserHistory);

const history = [];
history.push("google")
history.push("youtube")
history.push("github")
history.pop()
history.pop()
console.log(history);
