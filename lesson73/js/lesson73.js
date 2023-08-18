message = "Good Global"
function hello1() {
    message = "Good MOnring"
    {
    console.log("Hello 1: " + message)
    }
    let c = function hello2(){
        console.log("i am c")
    }
    return c
}
c = hello1()
c()

/// example
function init(){
    let name = "Hardeep"; // name is a local variable created by init 
    function displayNAme(){
        /// displayName () is the inner fucnton a closure
        console.log(name); // use variable in the parent function
    }
    name = "Deep"
    return displayNAme;
}
let a = init();
a()


function returnFunc(){
const x = ()=>{
    let b = 1
    console.log(b)
    const y = ()=>{
        // let  b = 2
        console.log(b)
        const z =()=>{
            // b = 3
            console.log(b)
        }
        z()
    }
    b = 999
    y()    
}
return x
}

let b = returnFunc()
b()
