// Accessing Children of an Element on DOM in js
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])

let arr = Array.from(document.body.childNodes) // For Convert into array
console.log(arr)