
// Problem 3
// document.getElementById("google").addEventListener("click", function()  {
//     var url = "https://www.google.com/search?q=javascript";
//     var win = window.open(url, "", "width=500,heigth=500,scrollbars=yes,resizable=yes");
//     win.focus();
// })

// ignore it. we will do it in future.
// const fetchContent = async (url) => {
//     con = await fetch(url);
//     let a = await con.json()
//     return a;
// }


// setInterval(async function(){
//     let url ="https://jsonplaceholder.typicode.com/tools/1"
//     console.log(await fetchContent(url))
// }, 3000)

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 200)