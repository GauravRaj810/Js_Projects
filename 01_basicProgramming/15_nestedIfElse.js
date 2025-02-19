// nested if else - 

/* winning number = 19 

19 your guess is right
17 too low 
20 too high */

let  winningNum = 19;
let guess_number = +prompt("Guess a number");
if(guess_number==winningNum){
    console.log("your guess is right !");
} else{
    if(guess_number>winningNum){
        console.log("Too high");
    }else{
        console.log("too low");
    }
} 