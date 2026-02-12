// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

function union(arr1, arr2){
    let merged = [...arr1, ...arr2];
    let unique = [...new Set(merged)];
    return unique;
}
console.log(union(arr1, arr2));