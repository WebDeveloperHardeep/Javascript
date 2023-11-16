// Create snake, water & gun game in javascript
// the game should ask you to enter s, w or c. the computer should able to randomly
// genrate s, w or g and declare win or loss using alert
// use alert, prompt and confirm whenever requied!

let = user = prompt("Enter S, W or G")
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpu1]

const match = (cpu, user)=>{
    if(cpu === user){
        return "Nobody. Match is Tied"
    }
    else if(cpu === "S" && user === "W")
    {
        return "cpu"
    }
    else if(cpu === "S" && user === "G")
    {
        return "user"
    }
    else if(cpu === "G" && user === "W")
    {
        return "user"
    }
    else if(cpu === "G" && user === "S")
    {
        return "cpu"
    }
    else if(cpu === "W" && user === "S")
    {
        return "user"
    }
    else if(cpu === "W" && user === "G")
    {
        return "cpu"
    }
}
let result = match(cpu ,user)
console.log("The Winner is: " + result)