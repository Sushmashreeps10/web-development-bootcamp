1. Create a h2 heading element with text = "Hello JavaScript".Append "From Bangalore Students" to this text using js.

var heading = document.querySelector("h2").append("  From Bangalore Students");
console.dir(heading);


2. Create 3 divs with common class name = "Box". Access them & add some unique text to each of them

var divs = document.querySelectorAll(".Box");
console.dir(divs[0]);

divs[0].innerText = "New Unique Value = 1 ";
divs[1].innerText = "New Unique Value = 2 ";
divs[2].innerText = "New Unique Value = 3 ";
