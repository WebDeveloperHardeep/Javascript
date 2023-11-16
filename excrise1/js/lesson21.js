
// Exercise 1 : Guess the number
// Prize Amount : Rs 500 Amazon voucher

//  let number = 0 // Generate Random number here
//  let chances = 0
// keep asking for the number untill the correct number is guesssed
// incorrect the chances variable

// Eventally after the game is over, display the (100 - number of Chances) and the acual
// number

console.table("GUESS THE NUMBER ")
let number = Math.floor((Math.random() * 100) );
let guessNum = 0;
let chances = 0;
do {
    chances +=1;
    guessNum = parseInt(prompt("Enter the guess : "));
    if (guessNum > number) {
        console.table("Your guess is greater than the original number!");
    }
    else if (guessNum < number) {
        console.table("Your guess is smaller than the original number!");
    }
    else if(guessNum == number){
        console.table("Your guess is correct");
    }
} while (number != guessNum);
    
console.table("Score is : " + (100-chances));
console.table("The actual number is : " + number);
