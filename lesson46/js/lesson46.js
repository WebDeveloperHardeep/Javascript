let p1 = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("i am a promise and i am Resolve")
        resolve(true)
        // reject(new Error("i am an error"))
    },5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("i am a promise and i am Rejected")
        // resolve(true)
        reject(new Error("i am an error"))
    },5000)
})

console.log(p1, p2)

// to get the value
p1.then((value)=>{
    console.log(value)
})
// to catch the error
p2.catch((error)=>{
    console.log("some error occured in p2")
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})