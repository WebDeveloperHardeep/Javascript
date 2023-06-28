console.log(console)
console.error("this is error")

console.assert(5>5) // for assert any condition. if condition is false. it will be show error.
// console.clear()
obj = {a:1, b:2, c:3};
console.table(obj)
console.warn("hello Do not Drink Alcohal")
console.info()
console.table(console)

console.time("forloop")

for(let i=0; i<5; i++){
    console.log(233)
}

console.timeEnd("forloop")

console.time("whileloop")

let i = 0;
while(i< 500) {
    console.log(233)
    i++;
}

console.timeEnd("whileloop")