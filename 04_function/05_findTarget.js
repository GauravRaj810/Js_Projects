/* there is array pass parameter as array and target no and it will return the index no if found otherwise not exist in the array  */

/* what take care of - 
✅ Removes unnecessary console.log() inside the loop
✅ Returns the index instead of the element (common practice in search functions)
✅ Returns -1 when the target is not found (just like indexOf()) */

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return [i];
        } 
    }
    return -1;    // Returns -1 when the target is not found
}

console.log(findTarget([1, 2, 3, 4, 5], 1));  // return 0 index ...