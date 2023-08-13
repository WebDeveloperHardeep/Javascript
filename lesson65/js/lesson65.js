class Employee{
    login(){
        console.log("Employee has logged in")
    }
    logout(){
        console.log("Employee has logged out")
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programer extends Employee{
  //  constructor(){--------------> if there is no constructor in the child class this is created automatically
   //    super(....args)
    // }
     constructor(name){
        super(name)
        console.log(`${name} - Employe s Constructor is here`)
        // this.name = name
    }
    requestCoffee(x){
        console.log(`Employee ha requested ${x} Coffee`)
    }
    requestLeaves(leaves){
        super.requestLeaves(5)
        console.log("One Extra is Granted")
        // console.log(`Employee has requested ${leaves+1} leaves(one Extra)`)
    }
}

let e = new Programer("harry")
e.login()
e.requestLeaves(7)
