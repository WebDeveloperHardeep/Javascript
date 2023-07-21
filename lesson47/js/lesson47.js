// // Promise Chaining
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2")
//     }, 2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
//     return 2
// }).then((value)=>{
//     console.log("now we are pakka done")
// })

const loadScript =((src)=>{
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve(1)
    }
    script.onerror = ()=>{reject(0) }
})

let p1 = loadScript("http://localhost:3000/index.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are sorry but we are having")
})


