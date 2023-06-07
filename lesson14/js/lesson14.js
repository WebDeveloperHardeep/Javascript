// Chapater 4 prtice set on strings

// console.log("har\"".length)
// Problem1
let str = "har\""
console.log(str.length)

const sentence ='The quick brown fox jumps over the lazy dog';
const word =  'fox2';
// Problem2

console.log(sentence.includes(word))
console.log(`"The word "${word}" ${sentence.includes(word) ?  'is' : 'is not'} in the sentence=`);

// Problem3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Problem4

let str2 ="Please Give Rs 1000"
let amount = Number.parseFloat(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Problem 5
let friend = "Dipika";
frined[3] = "R"
console.log(friend) // friend is not change. beacuse string is immutable