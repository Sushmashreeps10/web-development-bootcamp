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
