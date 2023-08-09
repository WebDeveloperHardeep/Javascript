console.log(document.cookie)
document.cookie = "name=hardeeep21321"
document.cookie = "name2=hardeeep213241"
document.cookie = "name=hardeeep"

let k = prompt("Enter Your Key")
let value= prompt("Enter Your Key")
document.cookie = `${encodeURIComponent(k)}=${encodeURIComponent(value)}`
console.log(document.cookie)
