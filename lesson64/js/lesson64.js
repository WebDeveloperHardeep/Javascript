class Employee{
    login(){
        console.log("Emloyee has logged in")
    }
    logout(){
        console.log("Employee has logged out")
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programer extends Employee{
    requestCoffee(x){
        console.log(`Employee ha requested ${x} Coffee`)
    }
    requestLeaves(leaves){
        super.this.requestLeaves(5)
        console.log("One Extra is Granted")
        // console.log(`Employee has requested ${leaves+1} leaves(one Extra)`)
    }
}

let e = new Employee("harry")
e.login()
e.requestLeaves(7)
