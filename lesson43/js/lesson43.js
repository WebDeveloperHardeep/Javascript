
// example 1 of Syncronous Programing
// let a = prompt("what is your name ?")
// let b = prompt("what is your age ?")
// let c  = prompt("what is your Favortie Color ?")

// console.log(a + " is " + b + " years old and has " + c + " is favorite color")

// Asynchronous programing
 console.log("Start")
setTimeout(function() {
    console.log("hey i am good") // this print after 3 seconds accoding to the code
}, 3000)

console.log("End")

// Call backs

function loadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src;
    script.onload = function () {
    console.log("loaded Scrip With SRC" +src)
    callback(null, src);
}
    script.onerror = function () {
    console.log("Error Loading With SRC" +src)
    callback(new Error("Src got some error :"));
}
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("hello world!" + src)
}

function goodmorning(src){
    if(error){
        console.log(error)
        return
    }
    alert("Good Morning" + src);
}

loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", hello, goodmorning)

loadScript("https://cdn.jsdelivssr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", hello, goodmorning)