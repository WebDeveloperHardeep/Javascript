const loadScript = async (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload = ()=>{
            resolve(src + "Done Sucess")
        }
        document.head.append(script)
    })
}

// problem 1

// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// a.then((value)=>{
//     console.log(value)
// })


// problem 2

// const main2 = async () => {
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
//     console.log(a)
//     console.log(new Date().getSeconds())
// }
// main2()

// problem 3

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Please This is not Accetable"))
//     }, 4000)
// })

// let a = async () =>{
//     try{
//         let c = await p()
//         console.log(p)
//     }
//     catch(err){
//         console.log(err)
//         console.log("This error has been handled")
//     }
// }
// a()

// Problem 4

let p1 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}



let p2 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        },1000)
    })
}



let p3 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        },3000)
    })
}

const run = async()=>{
    let a1 = await p1()
    // console.log(a1)
    let a2 = await p2()
    // console.log(a2)
    let a3 = await p3()
    // console.log(a3)
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1, a2, a3)
    console.timeEnd("Run")
}
run()