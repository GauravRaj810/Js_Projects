/* 1️⃣ Infinite Scroll (While Loop) – Dynamic Content Loading
On websites like Instagram or Twitter, when you scroll down, more posts keep loading until you reach the end.
👉 Question:
Write a while loop to simulate infinite scrolling on a website that loads new posts until there are no more posts available. */

let postsAvailable = 10; // Total posts that can be loaded

while (postsAvailable > 0) {
    console.log(`Loading new post... (${postsAvailable} remaining)`);
    postsAvailable--; // Reduce the number of available posts
}
console.log("No more posts to load! 🚫");
