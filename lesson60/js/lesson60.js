let a = {
    name: "Harry",
    language: "Javascirpt"
}
console.log(a)


let p = {
    run: () =>{
        alert("run")
    }
}

a.__proto__ ={
    name2: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name)