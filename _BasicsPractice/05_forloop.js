/* 📌 For Loop Question – Loading Comments on a Blog
On a blog website, only 5 comments are displayed per page. If there are 25 total comments, the website needs to load them in 5 batches (5 per page).
👉 Question:
Write a for loop that simulates loading 5 comments per page for 25 total comments and prints which batch is being loaded. 🚀 */

let commentsLoaded = 0;
let totalComments = 25;
for(let i=1;i<totalComments; i++){  // 
    commentsLoaded++;
    if(commentsLoaded%5===0){
        console.log(`loaded ${commentsLoaded} comments ...`);
    }
}
console.log("All comments loaded");