// Functions in javascript
function onePlusAvg(x, y) {
    console.log("Done");
    return 1 +(x+y)/2
 }

//  Arrow Function
const sum = (p, q)=>{
    return p + q
    } 
// For Funtion calling
    const hello =()=>{
        console.log("Hello How are you, i am tho fine yaar");
        return "Hi"
    }

// It is Important for Run Function. Otherwise Funtion is not Run on Chrome
let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log("One Plus Average of a and b in", onePlusAvg(a, b))
console.log("One Plus Average of b and c in", onePlusAvg(b, c))
console.log("One Plus Average of a and b in", onePlusAvg(c, a))
console.log(sum(9, 7));
console.log(v);

// For  Function Calling
hello();