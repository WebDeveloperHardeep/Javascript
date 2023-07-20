let promise = new Promise(function(resolve, reject) {
    alert("hello")
    resolve(56)
})




console.log("Hello")
setTimeout(function(){
    console.log("Hello two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello three")
console.log(promise)


/// fetch google.com homepage
// fetch data from the data api
// fetch pictures from the server
// print downloading
// rest of the script