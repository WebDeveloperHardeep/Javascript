// Chapter 3 - Practice Set on Loops and Functions 
let marks = {
    harry:90,
    shubham:9,
    lavish:56,
    monika:4
}


// Problem 1
for(let i=0; i<Object.keys(marks).length; i++)
{
//  console.log("The Marks of " + Object.keys(marks)[i] 
//  + "Are" + marks[Object.keys(marks)[i]]);
}

// Problem 2
for(let Key in marks){
    console.log("The Marks of " + Key + "Are" + marks[Key])
}

// Problem 3
let cn = 43
let i
while (i != cn) {
    i = prompt("Enter A Number");
    console.log("Try Again")
}
console.log("you have entered a correct number");

// Problem 4

const mean =(a, b, c, d)=>{
    return(a  + b + c + d)/4
}
console.log(mean(4, 5, 6, 7));