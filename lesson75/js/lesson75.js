const a =  async (text, n=2) =>{
    return new Promise((resovle, reject)=>{
        setTimeout(()=>{
            resovle(text)
        }, 2000 *n)
    })
}

(
    async ()=>{
      let text =  await a("I am resolving after 2 seconds", 1)
      console.log(text)
        text = await a("i am resoving after 4 seocnds")
        console.log(text)
    }
)()

function sum(a, b, c){
    return a + b + c
}

let x =[1, 2, 3]
console.log(sum(...x))


function simple(p, r, t){
    return p + r + t / 100
}
console.log(simple (1000, 5, 1))