<!-- String indexing  -->

1.For print - 
- simple add [] and the index number ...
for e.g - console.log(Name[index-number])

2. trim - 
Explanation
console.log(Name.length); → Prints 17 because of leading and trailing spaces.
Name.trim(); → This creates a new string but doesn't change Name because strings are immutable in JavaScript.
Name = Name.trim(); → Now, Name is updated with the trimmed value.
console.log(Name.length); → Now prints 6 (length of "Gaurav" without spaces).

3. all methods - and info 
Why Are Strings Immutable?
Strings are primitives in JavaScript, meaning they are stored in memory as read-only values.
Instead of modifying the original string, JavaScript creates a new string and returns it.
Common String Methods That Return a New String
Method	Description
trim()-	Removes spaces from both ends
toUpperCase()-	Converts to uppercase
toLowerCase()-	Converts to lowercase
replace()-	Replaces a substring
slice()	-Extracts a part of the string