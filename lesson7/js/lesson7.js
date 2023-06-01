// Chapter 2 Pratice Set
/// Problem No 1

// console.log("Problem no1 👇👇👇");
// let age1 = prompt("What is Your Age");
// age1 = Number.parseInt(age1)
// if(age1>18 && age1<20){
//     console.log("Your age Lies Between 10 to 20");
// }
// else{
//     console.log("Your age Doesn't lies Between 10 and 20");
// }

/// Problem No 2
// console.log("Problem No 2 👇👇👇");

// let age2 = prompt("What is your age ?")
// switch (age2){
//         case '12':
//         console.log("Your age is 12");
//         break

//         case '13':
//         console.log("Your age is 13");
//         break

//         case '14':
//         console.log("Your age is 14");
//         break

//         case '15':
//         console.log("Your age is 15");
//          break
//          default:
//             console.log("Your Age is Not Valid");

// }

// problem no 3
// 
    let num = prompt("what is your age");
    num = Number.parseInt(num)
    if(num % 2 == 0 && num % 3 == 0){
        console.log("Your Number is Diviable by 2 and 3");
    }
    else{
        console.log("Your number is not Diviable by 2 and 3");
    }
    // problem no 4
// 
let num2 = prompt("what is your age");
num = Number.parseInt(num2)
if(num % 2 == 0 || num % 3 == 0){
    console.log("Your Number is Diviable by 2 and 3");
}
else{
    console.log("Your number is not Diviable by 2 and 3");
}

// problem no 5
// 
let age3 = 18;
let aa = age3 > 19 ? "you can drive" : "You Cannot Drive";
console.log(aa);