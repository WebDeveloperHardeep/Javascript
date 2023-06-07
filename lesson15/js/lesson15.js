// Topic Arrays

let marks_class_12 = [91, 82, 63, 84, null, false, "Not Present"];
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log("The Length of Marks_class_12", marks_class_12.length)
marks_class_12[6] = 89// Adding a new value is the array
marks_class_12[6] = 96    // Adding a new value of an array
console.log(typeof marks_class_12)


// Quiz 

let marks_class_11 = [82, 52, 65, 89, 76, null, "Not Present"];

for(i=0; i<=marks_class_11.length; i++)
{
    console.log(marks_class_11[i])
}


let string = ["hardeep", "Gyan", "Daler", "Baldev"];

for(i=0; i<=string.length; i++)
{
    console.log(string[i])
}
