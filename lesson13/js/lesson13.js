
let name = "Harry\""
console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.replace("Har","Per"))

// let friend ="Naman"
// console.log(name.concat("Is a  friend of", friend, "ok"));

// let friend2 ="    Meena      "
// console.log(friend2.trim())

let fr = "Shivika" + "Harry" + "Naman"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr)

// QuickQuiz : Use a for loop to print a string

let friend = "Hardep" + "Daler" + "Baldev" + "Gurpreet"
i = prompt("Enter Any Number")

for(i=0; i<6; i++)
{
    console.log(friend)
}

let eldestBro = "Daler Singh"
let youngerBro = "Hardeep Singh"
i = prompt("Enter Any Number")


for(i=0; i<4; i++)
{
    console.log(`${eldestBro} is Elder Brother Of${youngerBro}
    and ${youngerBro} is Small Brother of ${eldestBro}`)
}