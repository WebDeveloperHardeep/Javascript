class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " Is running")
    }
    shout(){
        console.log(this.name +" is Shouting")
    }
}

class Monkey extends Animal {
    eatbanana(){
        console.log(this.name + " is eating banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("Bruno", "Brown")
let m = new Monkey("Chimpu", "White")

ani.shout()
m.eatbanana()
m.hide()
// ani.hide() it is thrown error