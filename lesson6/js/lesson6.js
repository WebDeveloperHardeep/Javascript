let age = prompt("Hey Whats you age");
// console.log(typeof age);
// Data types = number, string, undefined, null., symbol, boolean.

age = Number.parseInt(age) // how to Converting the string in a number.
console.log(typeof age);

// simple if staetement
console.log("Simple If statement 👇👇👇");
if(age < 0){
    alert("This is an invaliid age");
}
else if(age<9){
    alert("You are a kid, how you can think about Driving");
}

else if(age<18 && age>=9){
    alert("You are  a kid, you can think of driving after 18");
}
else{
    alert("You Can now drive as you are above 18 ");
}

console.log("if else statement is Done");
console.log("you can", (a<18 ? "Not drive" :"drive") );

// Homework - Explore switch statement and write a basic program in the commets

const expr = 'have a licences';
switch (expr) {
  case 'Licences':
    console.log('You Can not Drive on Road. But You Can Ride Bike');
    break;
  case 'I Have Not Licences':
  case 'Papayas':
    console.log('You can not drive any vehile.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Yes, We Are Allow you For Driving Beacuse you Have ${expr}.`);
}