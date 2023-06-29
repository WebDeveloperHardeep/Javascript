// Chapter 6 - pratice set //
// problem 1
let age = prompt("enter your age")
age = Number.parseInt(age)
let runAgain = true;
const canDrive = (age)=>{
    return age>=18?true:false
   }

    while(runAgain){
    let age = prompt("Enter Your age")
    age = Number.parseInt(age)
    
    if(age<0){
        console.error("pls enter a Vault age")
        break;
    }
    if(canDrive(age)){
        alert("yes you can drive")
    }
    else{
        alert("you can not drive")
    }
    runAgain = confirm("Do you want to run again")
    }

//     let number = prompt("Enter Number")
//     number = Number.parseInt(number)

//   if(number > 4){
//     location.href = "https://youtube.com"
//   }

let color = prompt("Enter the Page Background color")
document.body.style.background = color