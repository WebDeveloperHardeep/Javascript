// Change the card title to red

// let cTitle = document.getElementsByClassName("card-title")[0]
// cTitle.style.color = "red"

let cTitle = document.getElementById("first-card")
cTitle.style.color = "Green"

let cTitles = document.querySelectorAll(".card-title")
cTitles[0].style.color = "blue"
cTitles[1].style.color = "green"
cTitles[2].style.color = "red"
console.log(cTitles)

document.querySelector(".this").style.color ="black"
document.querySelector(".this").style.background ="red"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))