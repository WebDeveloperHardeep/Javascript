class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        alert("mai ud tha hu ")
    }
    get name(){
        return this._name
    }
    set name(newName){
        return this._name
    }
  
}
class Rabbit extends Animal{
    eatCarrot(){}
}


let a = new Rabbit("Harry")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)

console.log(Caches instanceof Animal)
