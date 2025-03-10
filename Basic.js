Basic of js

// variables

full_name = "sushma";
age = 21;
a = null;
b = undefined;
place = "bangalore";
console.log(full_name);

// arithmetic operators

a = 10;
b = 28;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);

// Objects

const var = {
  fullName : "Sushma",
  Place : "Bangalore",
  Number : 1234567890
  };

// if/else

let a = prompt("enter a num(0-100):- ");
let grade;

if (a <= 100 && a >=80){
    grade = "A";
} else if (a <= 89 && a >=70){
    grade = "B";
}else if (a <= 69 && a >=60){
    grade = "C";
}else if (a <= 59 && a >=50){
    grade = "D";
} else {
    grade = "F";
}

console.log("The grade of the student is:- ", grade)
