// problem1
document.getElementsByTagName("nav")[0].firstElementChild.style.color ="green"
// problem2
document.getElementsByTagName("nav")[0].firstElementChild.style.color ="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color ="green"

// problem 4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background ="cyan"
});
