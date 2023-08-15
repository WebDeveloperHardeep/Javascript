// {
// let a = 8; // let has block level scope
// }
// console.log(a)

let p = 9
function ax(){
    let a = 8; 
    console.log(a) // Function Scope
    console.log(p)
    }
    ax()
    console.log(a)
    console.log(p)