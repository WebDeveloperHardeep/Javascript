async function hardeep(){

let dehliWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("27 Degree")
    }, 7000)
})

let BanglorWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 Degree")
    }, 50000)
})

//  dehliWeather.then(alert)
//  BanglorWeather.then(alert)
 console.log("fetching dehliweather pls wait.......")
let dehliW = await dehliWeather
console.log("fetching Dehli Weather : " + dehliW)
console.log("fetching Banglroe weather pls wait.......")

let BanglorWeatherW = await BanglorWeather
console.log("fetching Banglore Weather : " + BanglorWeatherW)
return[dehliW, BanglorWeatherW]
}
 const cherry = () => {
    console.log("hey i am cherry and i am    waiting")
 }

 const main1 = async() =>{

     console.log("Welcome to Weather Control Room")
     let a = hardeep();
     let b = cherry();
     a.then((value)=>{
         console.log(value)
        })
    }
    main1()