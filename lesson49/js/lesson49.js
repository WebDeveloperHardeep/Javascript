let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
        // reject(new Error("Error"));
    }, 1000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2");
    }, 2000);
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3");
    }, 3000);
})

// 

// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(New Error("Hey"));

promise_all.then((value)=>{
    console.log(value)
})