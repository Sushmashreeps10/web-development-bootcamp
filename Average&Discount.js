// Q. For a given array with marks of students -> [85,97,44,37,76,60]. Find the vag marks of the entire class

function calAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const arr = [10, 20, 30, 40, 50];
const average = calAvg(arr);
console.log("Average:", average);


// To add 10% off on every items

let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items) {  
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);  
    i++;
}

