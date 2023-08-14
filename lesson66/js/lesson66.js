class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        alert("Animal " +  Animal.capitalize(this.name) + "is walking")
    }
   static capitalize(){
        return this.name.charAt(0).toUpperCase() + this.name.substr(1, name.length)
    }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize("thisa")-------------> this does not work