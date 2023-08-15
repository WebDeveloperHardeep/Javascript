// Destructuring assignment
let arr =[3, 5, 8, 9, 12 ,14]
// no need to do thi
// let a = arr[0]
// let b = arr[1]
let {a, b} = {a:1, b:5}
console.log(a, b)

// Spred Operator

let arr1 = [3,5,6]
let obj1 = { ...arr1}
console.log(obj1)

function sum(v1, v2, v3){
    return v1 + v2 + v3
}

console.log(sum(...arr1))

let obj2 = {
    name:"hardeep",
    company:"company xyz",
    address: "xyz"
}
// console.log({ ...obj2, name:"john", company:"abc"})
console.log({...obj2, name: "john", company:"Deep Editz", address:"Editor"})// this will print the obj2 object without chaging any value