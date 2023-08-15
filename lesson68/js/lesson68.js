class Complex{
    constructor(real, imaginary){
        this.real = this.real
        this.imaginary = imaginary
    }
    add(num){
        let real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set imaginary(newimaginary){
        this._imaginary = newimaginary
    }
    set real(newReal){
        this._real=newReal
    }

}

let a = new Complex(2, 4)
a.real = 10
a.imaginary =10
let b = new Complex(6, 2)
a.add(b)
console.log(` ${a.real}+${a.imaginary}i`)

// class human{
//     constructor(name, favfood){
//         this.name = name
//         this.favfood = favfood
//     }
//     walk(){
//         console.log(this.name + "human is walking")
//     }
// }

// class Student extends human {
//     walk(){
//         console.log(this.name + "Student is walking")
//     }
// }

// let o = new Student("Harry","bhindi")
// o.walk()

// console.log(o instanceof human)