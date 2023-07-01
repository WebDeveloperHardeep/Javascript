// mehtod1
let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1>Hello World</h1>"/

// method 2
let div = document.createElement("div")
div.innerHTML ="<h1>Hello World!</h1>"
// a.appendChild(div)

// methds 3
// a.prepend(div)

// method 4
// a.before(div)

// Meethod 5
a.replaceWith(div)