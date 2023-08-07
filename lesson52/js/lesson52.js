
try{
    let age = prompt("Ener your age ")
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("This is Probaly not true ")
    }
    // throw new Error("Harry is not good ")

}catch(error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stuck)
}

console.log("The Script is still Running")