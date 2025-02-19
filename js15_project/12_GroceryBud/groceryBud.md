#  What You’ve Learned from This Project
✔ How to dynamically manipulate the DOM (adding, editing, deleting elements).
✔ Using localStorage to save user data.
✔ Handling event listeners effectively.
✔ Creating a CRUD (Create, Read, Update, Delete) system with JavaScript.

1️⃣ value !== "" → Ensures input is not empty
The user must enter some text before submitting.
Prevents blank items from being edited.
2️⃣ editFlag → Checks if we are in edit mode
editFlag is true only when the Edit button was clicked.
This means the user is modifying an existing item instead of adding a new one.


1️⃣ Selecting Elements (DOM Selection)

🔹 Uses document.querySelector() and getElementById() to select form elements.
🔹 These will be used to manipulate the DOM dynamically (adding/deleting items)

2️⃣ Variables for Editing State

🔹 editElement → Stores the current item being edited.
🔹 editFlag → Tracks if we are in edit mode (true when editing).
🔹 editID → Stores the unique ID of the item being edited.

3️⃣ Event Listeners (Triggers)
🔹 submit event on the form → Calls addItem() when the user submits an item.
🔹 click event on the clear button → Calls clearItems() to remove all items.
🔹 DOMContentLoaded event → Calls setupItems() to load saved items from localStorage when the  page loads 

4️⃣ addItem() – Adds a Grocery Item

🔍 Explanation
✅ If adding a new item:

Creates an <article> element.
Assigns a unique data-id.
Inserts the item text and buttons.
Adds event listeners to Edit and Delete buttons.
Saves the item in localStorage.
✅ If editing an item:

Updates the existing item text.
Updates localStorage.
✅ If input is empty:

Displays an alert message


5️⃣ displayAlert() – Shows Messages

🔹 Displays a message (success or danger).
🔹 Removes the alert after 1 second using setTimeout().

6️⃣ clearItems() – Clears All Items

🔹 Removes all items from the DOM.
🔹 Clears localStorage.
🔹 Hides the list container.

7️⃣ deleteItem() – Deletes a Single Item

🔹 Gets the closest article element (grocery-item) using parentElement.
🔹 Removes the item from the list and localStorage.
🔹 Hides the container if the list is empty.


8️⃣ editItem() – Edits an Item
🔹 Gets the current item’s text and puts it in the input field.
🔹 Changes editFlag to true and sets the editID.
🔹 Changes Submit button to "Edit".

9️⃣ setBackToDefault() – Resets Form
🔹 Clears the input field.
🔹 Resets edit mode.

🔟 Local Storage Functions
-   Saving to Local Storage

🔹 Retrieves existing items from localStorage.
🔹 Adds the new item and saves it back.


# Getting Items from Local Storage

🔹Checks if "list" exists in localStorage.
🔹 Returns parsed JSON if found, otherwise an empty array.


# Removing from Local Storage

🔹 Filters out the deleted item.
🔹 Updates localStorage.


# Loading Stored Items on Page Load
🔹 Loops through stored items and creates them dynamically.
JSON.stringify() – Converting Data to a String

JSON.parse() – Converting a String Back to an Object

