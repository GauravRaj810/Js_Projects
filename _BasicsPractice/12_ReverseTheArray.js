// Reverse the array -- 
/* let numbers = [10,20,30,40,50];
let reverseNumber = [];
let i= numbers.length-1;
while(i>=0){
    reverseNumber.push(numbers[i])
    i--;

}
console.log(reverseNumber); */ // reversing the number 

// largest number in array - 
let arrNum = [10,20,30,40,50];
/* 
let index=0;
let maxNum = arrNum[0]

while(index<arrNum.length){
    if(arrNum[index]>maxNum){
        maxNum = arrNum[index];
    }
    index++;
}
console.log(maxNum); */

let indexx = arrNum.length-1;
let maxxNum = arrNum[0]

while(indexx>=0){
    if(arrNum[indexx]>maxxNum){
        maxxNum = arrNum[indexx];
    }
    indexx--;
}
console.log(maxxNum);

