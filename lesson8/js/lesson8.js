// Program is add First a Natural Numbers
// Noraml For Loop 
let sum = 0
let n = prompt("Enter The Value of n")
n = Number.parseInt(n)

for(let i = 0; i<n; i++){
    // console.log(i+1);
    sum += (i+1);
    console.log(i+1, "+");
}
console.log("Sum of First" + n + "natural number is" + sum);