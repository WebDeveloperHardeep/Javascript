
let x = function(deep){
    console.log(deep.target)
    console.log(deep.type, deep.clientX, deep.clientY)
    // alert("Hello World 1!")
}

let y = function(e){
    alert("Hello World 2!")
}
btn.addEventListener('click', x)

// btn.addEventListener('click', y)

// let a = prompt("What is your favrite number")

// if(a == "2"){
//     btn.removeEventListener('clcik', x)
// }