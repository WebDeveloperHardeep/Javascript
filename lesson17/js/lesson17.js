// let num_more = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [111, 112, 113, 114, 115, 116, 117, 118,119]

// console.log(num.length)
// delete num[0]
// console.log(num.length )

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// Sort method
// let compare = (a, b)=>{
//     return b - a
// }

// let num = [22, 332, 33, 452, 23, 2342,]
// num.sort(compare)
// console.log(num)

// splice and slice // Returns Deleteed items Modified here
let num = [22, 332, 33, 452, 23, 2342,]
// let deleteedValues = num.splice(2, 4, 1233, 1231, 2223, 5544)
// console.log(num)
// console.log(deleteedValues)

let newNum = num.slice(3, 5)
console.log(num)

