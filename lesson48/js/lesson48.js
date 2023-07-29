let p1 = new Promise((resolve, reject) => {
    alert("hey i am not resoled")
    setTimeout(()=> {
        resolve(1);
    }, 2000)
})


p1.then (()=>{
    console.log("hurry")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4)
        }, 4000)
    })
}).then((value) =>{
    console.log(value)
})

p1.then(()=> {
    console.log("Congrations this promise is now resloved")
})