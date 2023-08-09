let value = prompt("Enter key you want to set")
let value1 = prompt("Enter value you want to set")

localStorage.setItem(value, value1)


console.log(`the value at ${value} is ${localStorage.getItem(value1)}`)

if(value == "red" || value ==  "blue"){
    localStorage.removeItem(value)
}

if(value == 0){
    localStorage.clear
}