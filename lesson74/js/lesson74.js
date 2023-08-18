const sayHello = name => {
    console.log("greeting" + " "+ name)
    console.log("hii")
}
const x ={
    name: " harry",
    role: "js Developer",
    exp:20,
    show: function(){
        setTimeout(()=>{
            let that = this
            console.log(this)
        console.log(`The name is ${this.name}\n The role is ${this.role}`)
    }, 2000)
}
}
sayHello("hello", "Good Afternoon")
// x.show()